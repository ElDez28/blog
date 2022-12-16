import React from "react";
import PostContent from "../../components/posts/post-detail/PostContent";
import { getPostData } from "../../lib/posts-util";

const DetailsPage = (props) => {
  console.log(props.post);
  return <PostContent post={props.post}></PostContent>;
};
export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  console.log(slug);
  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
export default DetailsPage;
