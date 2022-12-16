import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";
const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/profile.jpg"
          alt="profile"
          width={300}
          height={300}
        ></Image>
      </div>
      <h1>Hi, I'm Eldin</h1>
      <p>I blog about web development</p>
    </section>
  );
};

export default Hero;
