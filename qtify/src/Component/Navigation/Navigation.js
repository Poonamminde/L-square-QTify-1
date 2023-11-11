import { Box } from "@mui/material";
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
      <img src="logo.png" alt="qtify" className="nav-logo" />
      <Search />
      <Button />
    </Box>
  );
}
