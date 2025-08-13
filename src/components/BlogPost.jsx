import React from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const BlogPost = ({ posts }) => {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4">Post Not Found</Typography>
        <Button component={Link} to="/">Back to Blog</Button>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" gutterBottom>{post.title}</Typography>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <Button variant="outlined" sx={{ mt: 3 }} component={Link} to="/">← Back to Blog</Button>
    </Box>
  );
};

export default BlogPost;
