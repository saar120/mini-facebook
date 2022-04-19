import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import { getLikesPerDay } from "../../firebase/posts/posts";
import PageLayout from "../../components/Styled/PageLayout.styled";
import Chart from "./components/Chart";

const containerSx = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "clamp(300px, 90vw, 1000px)",
  height: "clamp(500px, 70vh, 1000px)",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  mt: "2rem",
  padding: "0.6rem",
};

export default function AdminPage() {
  const [likesPerDay, setLikesPerDay] = useState([]);
  const { post } = useParams();

  useEffect(() => {
    const getLikesData = async () => {
      const likesData = await getLikesPerDay(post);
      setLikesPerDay(likesData.likesPerDayArr);
    };
    getLikesData();
  }, []);

  return (
    <PageLayout>
      <h3>Post Stats</h3>
      {likesPerDay.length > 0 && (
        <Container sx={containerSx}>
          <Chart likesPerDay={likesPerDay} />
        </Container>
      )}
    </PageLayout>
  );
}
