import React from "react";
import Card from "../ui/Card";
import classesItem from "./MeetupItem.module.css";

const MeetupItem = (props) => {
  return (
    <li className={classesItem.item}>
      <Card>
        <div className={classesItem.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classesItem.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classesItem.actions}>
          <button>To Favorits</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
