import { httpsCallable } from "firebase/functions";
import { functions } from "../firebase";

const addAdminRole = async (email) => {
  const addAdmin = httpsCallable(functions, "addAdminRole");
  try {
    const res = await addAdmin({ email });
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export { addAdminRole };
