import React, { useEffect, useState } from "react";
import API from "../services/fetchAPI";
import CardUser from "../components/CardUser";

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
    <ul>
      {!listUsers.results
        ? loading
        : listUsers.results.map((user, index) => (
          <li key={ index }>
            <CardUser
              userData={user}
            />
          </li>
        ))
      }
    </ul>
  );
}
