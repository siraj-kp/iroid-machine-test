import React from "react";

function InfoSection(props) {
  return (
    <>
      <h3 className="text-black heading-3">{props.title}</h3>
      {props.description.map((description) => (
        <p>{description}</p>
      ))}
    </>
  );
}

export default InfoSection;
