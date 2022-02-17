import React, { useEffect, useState } from "react";
import API from "../services/fetchAPI";
import CardUser from "../components/CardUser";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";

export default function UsersList() {
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const apiReturn = await API.fetchAPI();
    setListUsers(apiReturn);
    return listUsers;
  };

  const loading = <span>Loading</span>;

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
      {!listUsers.results
        ? loading
        : listUsers.results.map((user, index) => (
            <ListItem alignItems="flex-start" key={index}>
              <CardUser userData={user} />
              <Divider />
            </ListItem>
          ))}
    </List>
  );
}
