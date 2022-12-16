import React from "react";
import Hero from "../components/hero/Hero";
import FeaturedPosts from "../components/featuredPosts/FeaturedPosts";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";
const Home = (props) => {
  return (
    <>
      <Head>
        <title>Eldin's Blog</title>
        <meta name="description" content="I post about web development"></meta>
      </Head>
      <Hero></Hero>
      <FeaturedPosts posts={props.posts}></FeaturedPosts>
    </>
  );
};
export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 60,
  };
}
export default Home;
