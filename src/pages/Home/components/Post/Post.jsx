import React from "react";

import propTypes from "prop-types";

import PostStyled from "./Post.styled";

import { likePost } from "../../../../firebase/posts/posts";
import { useAuth } from "../../../../context/user.context";

function Post({ content, creator, id, likes }) {
  const user = useAuth();

  const likePostHandler = () => {
    likePost(id, user.uid);
  };

  console.count(`Post${id}`);

  return (
    <PostStyled>
      <div className="creator">{creator}</div>
      <p>{content}</p>
      <p>{likes}</p>
      <button type="button" onClick={likePostHandler}>
        Like
      </button>
    </PostStyled>
  );
}

Post.propTypes = {
  content: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  creator: propTypes.string.isRequired,
  likes: propTypes.number.isRequired,
};

export default React.memo(Post);
