import React, { useState, useContext } from "react";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
} from "@tabler/icons";
import { ThemeContext } from "../ThemeContext";

export default function Todolist(props) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const { selTheme } = useContext(ThemeContext);
  return (
    <div
      className="border-bottom p-1 py-2 fs-2 d-flex gap-2"
      style={{ color: selTheme.foreground }}
      onMouseOver={() => {
        setIsMouseOver(true);
      }}
      onMouseOut={() => {
        setIsMouseOver(false);
      }}
    >
      {
        <span
          style={
            props.completed
              ? {
                  textDecoration: "line-through",
                }
              : null
          }
          className="me-auto"
        >
          {props.title}
        </span>
      }
      {isMouseOver && (
        <>
          <button onClick={() => props.onMark()} className="btn btn-success">
            <IconCheck />
          </button>

          <button
            onClick={() => props.onArrowUp()}
            className="btn btn-secondary"
          >
            <IconArrowUp />
          </button>

          <button
            onClick={() => props.onArrowDown()}
            className="btn btn-secondary"
          >
            <IconArrowDown />
          </button>

          <button onClick={() => props.onDelete()} className="btn btn-danger">
            <IconTrash />
          </button>
        </>
      )}
    </div>
  );
}
