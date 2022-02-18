import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddNewText = ({
  content,
  setContent,
  setShowTextInput,
  setButtonsGroupMode,
}) => {
  const [text, setText] = useState("");

  const handleClick = () => {
    setContent([...content, text]);
    setText("");
    setShowTextInput(false);
    setButtonsGroupMode(false);
  };
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Add new text:</Form.Label>
        <Form.Control
          as="input"
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </Form.Group>
      <div>
        <Button onClick={handleClick}>Add content</Button>
      </div>
    </>
  );
};

export default AddNewText;
