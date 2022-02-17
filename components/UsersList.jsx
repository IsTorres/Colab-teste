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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUsers = async () => {
    const apiReturn = await API.fetchAPI();
    setListUsers(apiReturn);
    return listUsers;
  };

  const loading = <span>Loading</span>;

  return (
    <>
      <List
        className="grid"
        sx={{
          width: "100%"
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

    </>
  );
}
