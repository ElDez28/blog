import classes from "./postHeader.module.css";
import Image from "next/image";
const PostHeader = (props) => {
  const { title, image } = props;
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} alt="" width={200} height={150}></Image>
    </header>
  );
};

export default PostHeader;
