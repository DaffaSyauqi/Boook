import multer from "multer";
import path from "path";
import prisma from "~/utils/server.prisma";
import { supabase } from "~/utils/supabaseClient";

// Gunakan multer memory storage agar file tidak disimpan ke disk lokal
const storage = multer.memoryStorage();

const imageFileFilter = (req: any, file: any, cb: (...args: any[]) => any) => {
  const allowedTypes = /jpeg|jpg|png|webp|avif|gif/;
  const isImage = allowedTypes.test(file.mimetype);

  if (isImage) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"), false);
  }
};

const upload = multer({
  storage,
  fileFilter: imageFileFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
}).array("file", 5);

function uploadImage(event: any) {
  return new Promise<{ files: any[]; productId: number }>((resolve, reject) => {
    upload(event.req, event.res, (err: any) => {
      if (err) return reject(err);

      const files = event.req.files;
      const productId = Number(event.req.body.productId);

      if (!files || files.length === 0 || isNaN(productId)) {
        return reject(new Error("Files or valid product ID is missing"));
      }

      if (files.length > 5) {
        return reject(new Error("Maximum 5 images allowed"));
      }

      resolve({ files, productId });
    });
  });
}

export default defineEventHandler(async (event) => {
  const { files, productId } = await uploadImage(event);

  const product = await prisma.product.findUnique({ where: { id: productId } });
  if (!product) {
    throw createError({ statusCode: 400, statusMessage: "Product not found" });
  }

  const uploadedUrls: string[] = [];

  for (const file of files) {
    const fileName = `product-${Date.now()}-${Math.random()
      .toString(36)
      .substring(2)}${path.extname(file.originalname)}`;

    const { error: uploadError } = await supabase.storage
      .from("product-image") // sesuaikan dengan nama bucket kamu
      .upload(fileName, file.buffer, {
        contentType: file.mimetype,
      });

    if (uploadError) {
      throw createError({
        statusCode: 500,
        statusMessage: `Upload failed: ${uploadError.message}`,
      });
    }

    const { data } = supabase.storage
      .from("product-image")
      .getPublicUrl(fileName);

    uploadedUrls.push(data.publicUrl);
  }

  await prisma.image.createMany({
    data: uploadedUrls.map((url) => ({
      url,
      productId,
    })),
  });

  return {
    message: "Images uploaded successfully",
    imageUrls: uploadedUrls,
  };
});
