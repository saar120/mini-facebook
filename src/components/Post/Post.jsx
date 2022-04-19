import React from "react";

import propTypes from "prop-types";

import { Button, Container, IconButton } from "@mui/material";
import { ThumbUpRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import PostStyled from "./Post.styled";

import { likePost } from "../../firebase/posts/posts";
import { useAuth } from "../../context/user.context";
import COLORS from "../../constants/colors";

function Post({ content, creator, id, likes }) {
  const user = useAuth();
  const navigate = useNavigate();

  const likePostHandler = () => {
    likePost(id, user.uid);
  };

  const userClickHandler = () => {
    navigate(`/${creator}`);
  };

  const adminClickHandler = () => {
    navigate(`/${id}/stats`);
  };

  return (
    <PostStyled>
      <div className="creator" onClick={userClickHandler}>
        {creator}
      </div>
      <p>{content}</p>
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        {user.admin && (
          <Button variant="contained" onClick={adminClickHandler}>
            Stats
          </Button>
        )}
        <Container
          sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "0.5rem" }}
        >
          <p>{likes}</p>
          <IconButton onClick={likePostHandler}>
            <ThumbUpRounded sx={{ color: COLORS.PRIMARY }} />
          </IconButton>
        </Container>
      </Container>
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
