import React from "react";
import Header from "../components/Header";
import UsersList from "../components/UsersList";

export default function index() {
  return (
    <div className="container">
      <Header />
      <UsersList />
    </div>
  );
}
