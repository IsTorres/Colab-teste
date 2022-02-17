import React, { useState } from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";

export default function CardUser(props) {
  const [visible, setVisible] = useState("false");
  const { userData } = props;
  const { name, location, login, dob } = userData;
  const nameUser = `${name.title} ${name.first} ${name.last}`;

  return (
    <Card sx={{ minWidth: 1, bgcolor: "#18181b" }} id="user">
      <CardContent id="user-info" sx={{ display: "grid" }}>
        <div id="initial-info">
          <Avatar
            sx={{
              width: 100,
              height: 100,
              marginRight: 5,
              border: 3,
              borderColor: "#811ac0",
            }}
            src={userData.picture.large}
          />
          <div>
            <Typography variant="subtitle1">
              {`Name: ${nameUser}`}
            </Typography>
            <Typography variant="subtitle1">
              {`Email: ${userData.email}`}
            </Typography>
          </div>
        </div>
        <Button
          sx={{ alignSelf: "end", maxWidth: "fit-content" }}
          variant="contained"
          id="btn-more-info"
          onClick={() => setVisible(!visible)}
        >
          {visible ? "More Info" : "Less Info"}
        </Button>

        {!visible && (
          <div id="full-info">
            <Divider />
            <div id="location-info">
              <Typography variant="h5">Location</Typography>
              <Typography
                variant="subtitle2"
              >{`Street: ${location.street.name}, ${location.street.number}`}</Typography>
              <Typography variant="subtitle2">{`City: ${location.city}`}</Typography>
              <Typography variant="subtitle2">{`State: ${location.state}`}</Typography>
              <Typography
                variant="subtitle2"
              >{`Country: ${location.country}`}</Typography>
              <Typography
                variant="subtitle2"
              >{`PostCode: ${location.postcode}`}</Typography>
            </div>
            <Divider />
            <div id="login-info">
              <Typography variant="h5">Login Info</Typography>
              <Typography variant="subtitle2">{`Username: ${login.username}`}</Typography>
              <Typography variant="subtitle2">{`User ID: ${login.uuid}`}</Typography>
            </div>
            <Divider />
            <div id="personal-info">
              <Typography variant="h5">Personal Info</Typography>
              <Typography variant="subtitle2">{`Birth date: ${dob.date}`}</Typography>
              <Typography variant="subtitle2">{`Age: ${dob.age}`}</Typography>
              <Typography variant="subtitle2">{`Phone: ${userData.phone}`}</Typography>
              <Typography variant="subtitle2">{`Cell: ${userData.cell}`}</Typography>
              <Typography variant="subtitle2">{`Gender: ${userData.gender}`}</Typography>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
