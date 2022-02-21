import React from "react";
import Image from "next/image";
import classes from "./MeetupDetail.module.css";

const MeetupDetail = ({ image, title, address, description }) => {
  return (
    <section className={classes.detail}>
      <Image src={image} alt={title} height={20} width={20} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
};

export default MeetupDetail;
