export function showValidateError(error: any) {
  const errors = error?.data?.data?.fieldErrors;

  if (typeof error?.data?.message !== "undefined") {
    errorMsg(error?.data?.message);
  }

  if (typeof errors !== "undefined") {
    let delay = 0;
    for (const inputFieldName in errors) {
      for (const inputErrorMessage of errors[inputFieldName]) {
        setTimeout(() => {
          errorMsg(inputErrorMessage);
        }, delay);
        delay += 50;
      }
    }
  }
}
