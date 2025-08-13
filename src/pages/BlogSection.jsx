// BlogSection.jsx
import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";

// Import posts data
import posts from "../data/posts"; // adjust path if needed

const BlogSection = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" gutterBottom align="center">
        Blog
      </Typography>

      {posts.map((post, index) => (
        <Card key={index} sx={{ mb: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.excerpt}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "space-between" }}>
            <Button href={`/blog/${post.slug}`} variant="outlined">
              Read More
            </Button>
            <Box sx={{ display: "flex", gap: 1 }}>
              <FacebookShareButton url={post.url} quote={post.title}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <TwitterShareButton url={post.url} title={post.title}>
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              <LinkedinShareButton url={post.url}>
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
            </Box>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default BlogSection;
