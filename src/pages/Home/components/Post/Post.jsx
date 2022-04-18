import React from "react";

import propTypes from "prop-types";

import { IconButton } from "@mui/material";
import { ThumbUpRounded } from "@mui/icons-material";
import PostStyled from "./Post.styled";

import { likePost } from "../../../../firebase/posts/posts";
import { useAuth } from "../../../../context/user.context";
import COLORS from "../../../../constants/colors";

function Post({ content, creator, id, likes }) {
  const user = useAuth();

  const likePostHandler = () => {
    likePost(id, user.uid);
  };

  return (
    <PostStyled>
      <div className="creator">{creator}</div>
      <p>{content}</p>
      <div className="likes">
        <p>{likes}</p>
        <IconButton onClick={likePostHandler}>
          <ThumbUpRounded sx={{ color: COLORS.PRIMARY }} />
        </IconButton>
      </div>
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
