import {
  collection,
  addDoc,
  doc,
  orderBy,
  serverTimestamp,
  query,
  onSnapshot,
  deleteDoc,
  setDoc,
  getDocs,
  updateDoc,
  getDoc,
  increment,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

const addPost = async (content, creator) => {
  try {
    const post = {
      content,
      creator,
      createdAt: serverTimestamp(),
      likes: 0,
    };
    const postRef = await addDoc(collection(db, "posts"), post);
    return { ok: true, post: postRef.id };
  } catch (err) {
    console.error(err.message);
    return { ok: false, error: "Something went wrong, please try again." };
  }
};

const likePost = async (postId, userId) => {
  try {
    // add like to likes subcollection for stats
    const likesRef = doc(db, "posts", postId, "likes", userId);
    const likes = await setDoc(likesRef, { userId, createdAt: serverTimestamp() });
    // update likes count
    const postRef = doc(db, "posts", postId);
    await updateDoc(postRef, { likes: increment(1) });
    return { ok: true, likes };
  } catch (err) {
    console.error(err.message);
    return { ok: false, error: "Something went wrong, please try again." };
  }
};

const unlikePost = async (postId, userId) => {
  try {
    // remove like from likes subcollection
    const likeRef = doc(db, "posts", postId, "likes", userId);
    const likes = await deleteDoc(likeRef);
    // update likes count
    const postRef = doc(db, "posts", postId);
    await updateDoc(postRef, { likes: increment(-1) });
    return { ok: true, likes };
  } catch (err) {
    console.error(err.message);
    return { ok: false, error: "Something went wrong, please try again." };
  }
};

const isPostLiked = async (postId, userId) => {
  try {
    const likesRef = doc(db, "posts", postId, "likes", userId);
    const like = await getDoc(likesRef);
    return { ok: true, isLiked: like.exists };
  } catch (err) {
    console.error(err.message);
    return { ok: false, error: "Something went wrong, please try again." };
  }
};

const getLikesPerDay = async (postId) => {
  try {
    const likesRef = collection(db, "posts", postId, "likes");
    const likes = await getDocs(query(likesRef, orderBy("createdAt", "asc")));
    const likesPerDay = {};
    likes.forEach((like) => {
      const { createdAt } = like.data();
      const date = createdAt.toDate().toDateString();
      likesPerDay[date] = likesPerDay[date] ? likesPerDay[date] + 1 : 1;
    });
    const likesPerDayArr = Object.keys(likesPerDay).map((date) => ({
      date,
      likes: likesPerDay[date],
    }));
    return { ok: true, likesPerDayArr };
  } catch (err) {
    console.error(err.message);
    return { ok: false, error: "Something went wrong, please try again." };
  }
};

const postsSnapShot = (setState, creatorId = null) => {
  const postsRef = collection(db, "posts");
  const q = creatorId
    ? query(postsRef, where("creator", "==", creatorId), orderBy("createdAt", "desc"))
    : query(collection(db, "posts"), orderBy("createdAt", "desc"));
  return onSnapshot(q, async (snapshotQuery) => {
    const posts = [];
    snapshotQuery.forEach(async (post) => {
      const { content, creator, createdAt, likes } = post.data();
      posts.push({
        id: post.id,
        content,
        creator,
        createdAt,
        likes,
      });
    });
    setState(posts);
  });
};

export { addPost, postsSnapShot, likePost, unlikePost, isPostLiked, getLikesPerDay };
