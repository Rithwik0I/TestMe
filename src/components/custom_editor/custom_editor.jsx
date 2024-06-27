import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./custom_editor.css";

const CustomEditor = ({ value, onChange }) => {
  const handleChange = (content, delta, source, editor) => {
    onChange(content);
  };

  return (
    <ReactQuill
      style={{ minHeight: "100px" }}
      value={value}
      onChange={handleChange}
    />
  );
};

export default CustomEditor;
