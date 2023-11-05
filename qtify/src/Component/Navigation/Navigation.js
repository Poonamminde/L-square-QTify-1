import { Box, TextField } from "@mui/material";
import "./Navigation.css";
import Search from "./Search";
import Button from "./Button";
export default function Navigation() {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      className="navbar"
    >
      <img src="logo.png" />
      <Search />
      <Button />
    </Box>
  );
}
