import React from "react";
import { Link } from "react-router";

function ToolCard({ title = "", description = "", image = "", link = "" }) {
  return (
    <div className="border rounded-md p-4 text-white">
      <Link to={link}>
        <img
          src={image}
          alt={title}
          className="mb-4 object-cover w-full overflow-hidden aspect-square rounded-md"
        />
        <h1 className="text-2xl mb-4">{title}</h1>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default ToolCard;
