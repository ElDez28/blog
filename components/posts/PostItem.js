import React from "react";
import Link from "next/link";
import classes from "./postItem.module.css";
import Image from "next/image";
const PostItem = (props) => {
  const { title, date, excerpt, slug, image } = props.post;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/posts/${slug}/${image}`;
  return (
    <li className={classes.post}>
      <Link href={`/posts/${slug}`}>
        <a>
          <div className={classes.image}>
            <Image
              src={imagePath}
              alt=""
              width={300}
              height={200}
              layout="responsive"
            ></Image>
          </div>
          <div>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
