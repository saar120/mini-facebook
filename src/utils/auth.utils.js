const getErrorMessage = (code) => {
  switch (code) {
    case "auth/weak-password":
      return "Password must be at least 6 characters";
    case "auth/email-already-in-use":
      return "Email already in use";
    case "auth/wrong-password":
      return "Wrong password";
    case "auth/user-not-found":
      return "User not found";
    default:
      return "An error has occurred";
  }
};

export default getErrorMessage;
