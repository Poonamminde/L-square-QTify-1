import React from "react";
import Card from "../Card";
import "./section.css";
import Carousel from "../Carousel";
import { useState } from "react";

export default function Index({ label, data }) {
  let [isCollapse, setIsCollapse] = useState(false);
  return (
    <div className="section-body">
      <div className="section-heading">
        <h1 className="section-title">{label}</h1>
        <h1
          className="collapse-state"
          onClick={() => setIsCollapse(!isCollapse)}
        >
          {isCollapse ? "Collapse" : "Show all"}
        </h1>
      </div>
      <div className="album-container">
        {isCollapse ? (
          data.map((item) => (
            <div key={item.id}>
              <Card item={item} />
            </div>
          ))
        ) : (
          <Carousel label={label} data={data} />
        )}
      </div>
      <hr />
    </div>
  );
}
