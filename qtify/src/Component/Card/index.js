import React from "react";
import { Card, CardMedia } from "@mui/material";
import "./card.css";
const CardElement = () => {
  return (
    <>
      <div className="card-container">
        <Card className="card-body">
          <CardMedia
            component={"img"}
            image={
              "https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
            }
            alt="song card"
            style={{ margin: 0 }}
            className="card-img"
          />
          <div className="card-content">
            <span className="card-pill">100M follows</span>
          </div>
        </Card>
        <p className="card-footer">New Bollywood</p>
      </div>
    </>
  );
};

export default CardElement;
