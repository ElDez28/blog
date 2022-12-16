import classes from "./postContent.module.css";
import PostHeader from "./PostHeader";
import ReactMarkdown from "react-markdown";
const post = {
  title: "Getting Started with NextJS",
  image: "getting-started-nextjs.png",
  excerpt:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!",
  date: "2022-02-10",
  slug: "getting-started-with-nextjs4",
  content: "# This is a first post",
};
const PostContent = (props) => {
  // const post = props.post;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath}></PostHeader>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
