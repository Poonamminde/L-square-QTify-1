import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";
import "./filteredSection.css";
import { useState } from "react";
import Carousel from "../Carousel";

const Index = ({ genres, data }) => {
  let [value, setValue] = useState("All");
  let [filteredData, setFilteredData] = useState([]);
  console.log(genres);
  const handleChange = (event) => {
    let genre = event.target.innerText;
    console.log(genre);
    if (genre === "All") {
      setFilteredData(data);
    } else {
      let arr = data.filter((item) => item.genre.label === genre);
      setFilteredData(arr);
    }
    console.log("filtered array", filteredData);
    setValue(event.target.innerText);
  };

  return (
    <div className="filtered-container">
      <h1 className="filtered-section-title">Songs</h1>
      <Box style={{ marginLeft: "2.5rem" }}>
        <Tabs
          value={value}
          onChange={(e) => handleChange(e)}
          aria-label="wrapped label tabs example"
          className="filtered-section-tabs"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#34c94b",
              borderRadius: "2px",
              borderWidth: "2px",
            },
          }}
        >
          <Tab
            value="All"
            label="All"
            style={{ color: "white", textTransform: "capitalize" }}
          />
          {genres.map((item) => (
            <Tab
              value={item.label}
              label={item.label}
              style={{ color: "white", textTransform: "capitalize" }}
            />
          ))}
        </Tabs>
      </Box>
      {filteredData.length ? (
        <div className="filtered-slider">
          <Carousel label="Songs" data={filteredData} />
        </div>
      ) : (
        <div className="filtered-slider">
          <Carousel label="Songs" data={data} />
        </div>
      )}
      <hr />
    </div>
  );
};

export default Index;
