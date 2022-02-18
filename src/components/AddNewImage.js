import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddNewImage = ({
  content,
  setContent,
  setShowFileInput,
  setButtonsGroupMode,
}) => {
  const [file, setFile] = useState(undefined);

  const handleClick = (e) => {
    e.preventDefault();
    if (file !== undefined) {
      setContent([...content, file]);
      setFile(undefined);
    }
    setShowFileInput(false);
    setButtonsGroupMode(false);
  };

  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Add new image:</Form.Label>
        <Form.Control
          as="input"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </Form.Group>
      <div>
        <Button onClick={(e) => handleClick(e)}>Add new file</Button>
      </div>
    </>
  );
};

export default AddNewImage;
