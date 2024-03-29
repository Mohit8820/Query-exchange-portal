import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "./styles.css";
import { Button } from "@mui/material";

export const Editor = (props) => {
  const [ans, setAns] = React.useState({
    answerBody: "",
    userAnswered: "",
    //     //     //   answeredOn: "jan 2",
    userId: "",
  });
  const [state, setState] = React.useState({ value: null });

  function handleChange(value) {
    setState({ value });
    setAns((prevAns) => {
      return {
        ...prevAns,
        answerBody: value,
      };
    });
  }
  // console.log(ans);

  const handleClick = () => {
    props.add(ans);
    setState({ value: null });
  };
  return (
    <div>
      <h3>Your Answer</h3>

      <div className="text-editor">
        <EditorToolbar />
        <ReactQuill
          theme="snow"
          value={state.value}
          onChange={handleChange}
          placeholder={"Write something awesome..."}
          modules={modules}
          formats={formats}
        />
      </div>
      <Button
        color="primary"
        onClick={handleClick}
        variant="contained"
        className="addButton"
      >
        Submit
      </Button>
    </div>
  );
};

export default Editor;
