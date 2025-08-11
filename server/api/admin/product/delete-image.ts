import prisma from "~/utils/server.prisma";
import supabaseAdmin from "~/utils/supabaseAdmin";

export default defineEventHandler(async (event) => {
  const { id } = await readBody(event);

  if (!id) {
    return { success: false, message: "Image ID is required." };
  }

  try {
    const image = await prisma.image.findUnique({ where: { id } });

    if (!image) {
      return { success: false, message: "Image not found." };
    }

    // Ambil nama file dari URL
    const fileName = image.url.split("/").pop();
    const bucketName = "product-image";

    // Hapus dari Supabase Storage
    const { error: storageError } = await supabaseAdmin.storage
      .from(bucketName)
      .remove([fileName!]);

    if (storageError) {
      console.error("Storage delete error:", storageError.message);
      return { success: false, message: "Failed to delete file from storage." };
    }

    // Hapus dari database
    await prisma.image.delete({ where: { id } });

    return { success: true, message: "Image deleted successfully." };
  } catch (error) {
    console.error("Error deleting image:", error);
    return { success: false, message: "Failed to delete image." };
  }
});
