import React, { useState } from "react";
import Button from "@mui/material/Button";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
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
    <Card sx={{ maxWidth: 345 }} id="user">
      <CardContent id="basic-info">
        <ListItemAvatar>
          <Avatar src={userData.picture.large} />
        </ListItemAvatar>
        <ListItemText
          primary={`Name: ${nameUser}`}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {`Email: ${userData.email}`}
              </Typography>
            </React.Fragment>
          }
        />
        <Button
          variant="contained"
          id="btn-more-info"
          onClick={() => setVisible(!visible)}
        >
          {visible ? "More Info" : "Less Info"}
        </Button>
        {!visible && (
          <div id="full-info">
            <div id="location-info">
              <Typography variant="h5">Location</Typography>
              <Typography
                paragraph
              >{`Street: ${location.street.name}, ${location.street.number}`}</Typography>
              <Typography paragraph>{`City: ${location.city}`}</Typography>
              <Typography paragraph>{`State: ${location.state}`}</Typography>
              <Typography
                paragraph
              >{`Country: ${location.country}`}</Typography>
              <Typography
                paragraph
              >{`PostCode: ${location.postcode}`}</Typography>
            </div>
            <Divider />
            <div id="login-info">
              <Typography variant="h5">Login Info</Typography>
              <Typography paragraph>{`Username: ${login.username}`}</Typography>
              <Typography paragraph>{`User ID: ${login.uuid}`}</Typography>
            </div>
            <Divider />
            <div id="personal-info">
              <Typography variant="h5">Personal Info</Typography>
              <Typography paragraph>{`Birth date: ${dob.date}`}</Typography>
              <Typography paragraph>{`Age: ${dob.age}`}</Typography>
              <Typography paragraph>{`Phone: ${userData.phone}`}</Typography>
              <Typography paragraph>{`Cell: ${userData.cell}`}</Typography>
              <Typography paragraph>{`Gender: ${userData.gender}`}</Typography>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
