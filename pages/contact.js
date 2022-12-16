import React from "react";
import ContactForm from "../components/contact/Form";
import Head from "next/head";
const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your message"></meta>
      </Head>
      <ContactForm></ContactForm>
    </>
  );
};

export default ContactPage;
