import React from "react";
import MeetupItem from "./MeetupItem";
import classesList from "./MeetupList.module.css";

const MeetupList = (props) => {
  return (
    <ul className={classesList.list}>
      {props.meetupsItem.map((meetupIt) => (
        <MeetupItem
          key={meetupIt.id}
          id={meetupIt.id}
          image={meetupIt.image}
          title={meetupIt.title}
          address={meetupIt.address}
          description={meetupIt.description}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
