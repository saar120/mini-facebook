import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import Post from "../../components/Post/Post";
import PageLayout from "../../components/Styled/PageLayout.styled";

import { postsSnapShot } from "../../firebase/posts/posts";

export default function UserPage() {
  const [posts, setPosts] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    const creatorId = pathname.slice(1);
    const unsubscribe = postsSnapShot(setPosts, creatorId);
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <PageLayout>
      {posts.length > 0 &&
        posts.map(({ content, creator, id, likes }) => (
          <Post key={id} content={content} creator={creator} id={id} likes={likes} />
        ))}
    </PageLayout>
  );
}
