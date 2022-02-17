import React from "react";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <header>
      <Typography
        variant="h2"
        component={ "h1" }
        fontWeight={"bold"}
        fontFamily={"inherit"}
        color={"white"}
        m={ 3 }
      >
        Lista de usuários
      </Typography>
      {/* <h1>Lista de usuários</h1> */}
    </header>
  );
}
