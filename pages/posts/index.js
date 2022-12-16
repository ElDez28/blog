import React from "react";
import AllPosts from "../../components/posts/AllPosts";
import { DUMMY_POSTS } from "../../data/dummy-posts";
import { getAllPosts } from "../../lib/posts-util";

const PostsPage = (props) => {
  return <AllPosts posts={props.posts}></AllPosts>;
};
export async function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}
export default PostsPage;
