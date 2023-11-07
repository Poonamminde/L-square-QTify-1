import React from "react";
import { TextField } from "@mui/material";
const Search = () => {
  return (
    <div>
      <form display="flex" justifyContent={"center"} alignItems={"center"}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          className="textbox"
          placeholder="search an album for your choice"
          style={{ borderRadius: "8px 0px 0px 8px" }}
        />
        <button
          type="submit"
          id="searchicon"
          style={{ borderRadius: "0px 8px 8px 0px" }}
        >
          <img
            src="searchicon.svg"
            alt="search"
            style={{ height: "15px", width: "15px", paddingRight: "10px" }}
          />
        </button>
      </form>
    </div>
  );
};

export default Search;
