import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AddNewRichText = ({
  content,
  setContent,
  setShowRichTextInput,
  setButtonsGroupMode,
}) => {
  const [richText, setRichText] = useState("");

  const handleContentChange = (e, editor) => {
    const data = editor.getData();
    setRichText(data);
  };

  const handleClick = () => {
    setContent([...content, richText]);
    setRichText("");
    setShowRichTextInput(false);
    setButtonsGroupMode(false);
  };

  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>New rich content:</Form.Label>
        <div>
          <CKEditor
            id="editor"
            editor={ClassicEditor}
            data={richText}
            onChange={(event, editor) => handleContentChange(event, editor)}
          />
        </div>
      </Form.Group>
      <div>
        <Button onClick={handleClick}>Add new rich text</Button>
      </div>
    </>
  );
};

export default AddNewRichText;
