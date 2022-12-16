import React from "react";
import PostsGrid from "../posts/PostsGrid";
import classes from "./featuredPosts.module.css";
import { DUMMY_POSTS } from "../../data/dummy-posts";
const FeaturedPosts = (props) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts}></PostsGrid>
    </section>
  );
};

export default FeaturedPosts;
