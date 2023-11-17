import React from "react";
import { Card, CardMedia } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import "./card.css";
const CardElement = ({ item }) => {
  return (
    <>
      <div className="card-container">
        <Card className="card-body">
          <CardMedia
            component={"img"}
            image={item.image}
            alt="song card"
            style={{ margin: 0 }}
            className="card-img"
          />
          <div className="card-content">
            <span className="card-pill">
              {item.follows
                ? item.follows + "M follows"
                : item.likes + " Likes"}
            </span>
          </div>
        </Card>
        <div className="card-footer">
          <p>{item.title}</p>
        </div>
        {item.songs && (
          <Tooltip>
            <div className="tooltip">{`${item.songs.length} songs`}</div>
          </Tooltip>
        )}
      </div>
    </>
  );
};

export default CardElement;
