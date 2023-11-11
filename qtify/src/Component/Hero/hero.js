import React from "react";
import { Box, Typography } from "@mui/material";
import headphone from "../../assets/vibrating-headphone.svg";
import "./hero.css";

const hero = () => {
  return (
    <Box display="flex" justifyContent={"center"} alignItems={"center"}>
      <Box display="flex" flexDirection={"column"}>
        <Typography variant="h4" className="heading">
          100 Thousand Songs, ad-free
        </Typography>
        <Typography variant="h4" className="heading">
          Over thousands podcast episodes
        </Typography>
      </Box>
      <img src={headphone} className="hero-image" alt="vibrating headphone" />
    </Box>
  );
};

export default hero;
