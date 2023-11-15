import React from "react";
import Card from "../Card";
import "./section.css";

export default function Index({ label, data }) {
  return (
    <div className="section-body">
      <h1 className="section-title">{label}</h1>
      <div className="album-container">
        {data.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
}
