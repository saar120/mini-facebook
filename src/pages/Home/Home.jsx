import React, { useState, useEffect } from "react";

import { signUserOut } from "../../firebase/auth/auth";
import { postsSnapShot } from "../../firebase/posts/posts";

import HomeStyled from "./Home.styled";
import AddPost from "./components/AddPost/AddPost";
import Post from "./components/Post/Post";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = postsSnapShot(setPosts);
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <HomeStyled>
      <button type="button" onClick={() => signUserOut()}>
        SignOut
      </button>
      <AddPost />
      {posts.length > 0 &&
        posts.map(({ content, creator, id, likes }) => (
          <Post key={id} content={content} creator={creator} id={id} likes={likes} />
        ))}
    </HomeStyled>
  );
}
