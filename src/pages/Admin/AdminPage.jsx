import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { getLikesPerDay } from "../../firebase/posts/posts";

export default function AdminPage() {
  // eslint-disable-next-line no-unused-vars
  const [likesPerDay, setLikesPerDay] = useState({});
  const { post } = useParams();

  useEffect(() => {
    const getLikesData = async () => {
      const likesData = await getLikesPerDay(post);
      console.log(likesData);
      setLikesPerDay(likesData);
    };
    getLikesData();
  }, []);

  return <div>AdminPage</div>;
}
