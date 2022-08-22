import React from "react";

export default function DeleteButton({ id, onDelete }) {
  return (
    <button className="contact-item__delete" onClick={() => onDelete(id)}>
      &#10005;
    </button>
  );
}
