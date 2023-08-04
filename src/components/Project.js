import { Paper } from "@mui/material";
import React from "react";

function Project({ image, onClick, title }) {
  return (
    <div className="project" onClick={onClick}>
      <div className="project__description">{title}</div>
      <img src={image} alt="project-img" className="project__img" />
      
    </div>
  );
}

export default Project;
