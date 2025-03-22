export const validateLoginForm = (field, value) => {
  let errorMessage = "";

  switch (field) {
    case "username":
      if (!value) {
        errorMessage = "Username tidak boleh kosong!";
      }
      break;

    case "password":
      if (!value) {
        errorMessage = "Password tidak boleh kosong!";
      }
      break;

    default:
      break;
  }

  return errorMessage;
};
