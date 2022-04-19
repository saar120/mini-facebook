import React, { useState } from "react";

import { Button } from "@mui/material";
import { useAuth } from "../../../../context/user.context";
import { addPost } from "../../../../firebase/posts/posts";

import AddPostStyled from "./AddPost.styled";
import Input from "../../../../components/Input";

function AddPost() {
  const user = useAuth();
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async () => {
    if (!content) return;
    const postRef = await addPost(content, user.email);
    if (postRef.ok) {
      setContent("");
    }
  };

  return (
    <AddPostStyled>
      <Input
        name="content"
        value={content}
        type="text"
        handleChange={handleChange}
        placeholder="What's on your mind..."
      />
      <Button variant="contained" onClick={handleSubmit}>
        Add Post
      </Button>
    </AddPostStyled>
  );
}

export default AddPost;
