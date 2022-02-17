import React, { useState } from "react";

export default function CardUser(props) {
  const [visible, setVisible] = useState("false");
  const { userData } = props;
  const { name, location, login, dob } = userData;
  const nameUser = `${name.title} ${name.first} ${name.last}`;


  return (
    <>
      <section id="basic-info">
        <img src={userData.picture.large} />
        <h3>{`Name: ${nameUser}`}</h3>
        <h4>{`Email: ${userData.email}`}</h4>
      </section>

      <button id="btn-more-info" onClick={() => setVisible(!visible)}>
        {visible ? "More Info" : "Less Info"}
      </button>
      { !visible && (
        <section id="full-info">
          <div id="location-info">
            <h3>Location</h3>
            <p>{`Street: ${location.street.name}, ${location.street.number}`}</p>
            <p>{`City: ${location.city}`}</p>
            <p>{`State: ${location.state}`}</p>
            <p>{`Country: ${location.country}`}</p>
            <p>{`PostCode: ${location.postcode}`}</p>
          </div>
          <div id="login-info">
            <h3>Login Info</h3>
            <p>{`Username: ${login.username}`}</p>
            <p>{`User ID: ${login.uuid}`}</p>
          </div>
          <div id="personal-info">
            <h3>Personal Info</h3>
            <p>{`Birth date: ${dob.date}`}</p>
            <p>{`Age: ${dob.age}`}</p>
            <p>{`Phone: ${userData.phone}`}</p>
            <p>{`Cell: ${userData.cell}`}</p>
            <p>{`Gender: ${userData.gender}`}</p>
          </div>
        </section>
      )}
    </>
  );
}
