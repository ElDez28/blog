import React from "react";
import classes from "./postGrid.module.css";
import PostItem from "./PostItem";
const PostsGrid = ({ posts }) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post}></PostItem>
      ))}
    </ul>
  );
};

export default PostsGrid;
