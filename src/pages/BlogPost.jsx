// src/pages/BlogPost.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";

const posts = [
  // your posts data with slug, title, content, excerpt, url, etc.
];

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <Typography>Post not found</Typography>;

  return (
    <Box sx={{ p: 4, maxWidth: "800px", mx: "auto" }}>
      <Helmet>
        <title>{post.title} | Kampamba Shula Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={post.url} />
        {/* Add more meta tags like og:image as needed */}
      </Helmet>

      <Typography variant="h3" gutterBottom>{post.title}</Typography>
      <Typography variant="body1" paragraph>{post.content}</Typography>
      {/* Render full post content */}
    </Box>
  );
};

export default BlogPost;
