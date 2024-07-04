import React from "react";
import { Grid, Container } from "@mui/material";
import { PostCard } from "../molecules/PostCard";
import useFetchPosts from "../../hooks/useFetchPosts"; 

const PostsGrid = () => {
  const posts = useFetchPosts();

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} mt={1}>
        {posts.map((post) => (
          <Grid item key={post.id} md={12}>
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PostsGrid;
