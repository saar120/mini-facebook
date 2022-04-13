import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";
import getErrorMessage from "../../utils/auth.utils";

const register = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    return { ok: true, user: res.user };
  } catch (err) {
    console.error(err.message);
    return { ok: false, error: getErrorMessage(err.code) };
  }
};

const signIn = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return { ok: true, user: res.user };
  } catch (err) {
    console.error(err.message);
    return { ok: false, error: getErrorMessage(err.code) };
  }
};

const signUserOut = async () => {
  try {
    await signOut();
    return { ok: true };
  } catch (err) {
    console.error(err.message);
    return { ok: false, error: getErrorMessage(err.code) };
  }
};

export { register, signIn, signUserOut };
