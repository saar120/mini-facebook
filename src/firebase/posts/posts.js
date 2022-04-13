import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";

const addPost = async ({ content, creator }) => {
  e.preventDefault();
  try {
    await addDoc(collection(db, "tasks"), {
      content,
      created: Timestamp.now(),
    });
    onClose();
  } catch (err) {
    console.err(err);
    return null;
  }
};
