import React from "react";

export default function CardUser(props) {
  const { userData } = props;
  const name = `Name: ${userData.name.title} ${userData.name.first} ${userData.name.last}`;
  
  return (
    <div>
      <img src={userData.picture.large} />
      <h3>{name}</h3>
      <h4>{userData.email}</h4>
    </div>
  );
}
