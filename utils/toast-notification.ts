import { toast } from "vue-sonner";

export function errorMsg(message: string) {
  toast.error("Error!", {
    description: message,
  });
}

export function successMsg(message: string) {
  toast.success("Success!", {
    description: message,
  });
}
