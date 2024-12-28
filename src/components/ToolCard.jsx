import React from "react";
import { Link } from "react-router";

function ToolCard({
  title = "",
  description = "",
  image = "",
  link = "",
  isNew = false,
}) {
  return (
    <div className="border rounded-md p-4 text-white relative">
      {isNew && (
        <span className="text-amber-500 font-bold absolute bottom-0 right-0 bg-slate-50 px-2 rounded-tl-md">
          ✨new
        </span>
      )}
      <Link to={link}>
        <img
          src={image}
          alt={title}
          className="mb-4 object-cover w-full overflow-hidden aspect-square rounded-md"
        />
        <h1 className="text-lg mb-4 font-bold">{title}</h1>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default ToolCard;
