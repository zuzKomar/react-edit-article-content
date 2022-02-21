import React from "react";
import { useState, useEffect } from "react";
import ButtonGroup from "./ButtonGroup";
import { Button, Form } from "react-bootstrap";
import AddNewText from "./AddNewText";
import AddNewRichText from "./AddNewRichText";
import AddNewImage from "./AddNewImage";

const ArticleForm = ({ articles, setArticles }) => {
  const [content, setContent] = useState([]);
  const [buttonsGroupMode, setButtonsGroupMode] = useState(false);
  const [showTextInput, setShowTextInput] = useState(false);
  const [showRichTextInput, setShowRichTextInput] = useState(false);
  const [showFileInput, setShowFileInput] = useState(false);

  const handleAddContent = () => {
    setButtonsGroupMode(true);
  };

  const handleTextAddition = () => {
    setShowTextInput(true);
  };

  const handleRichTextAddition = () => {
    setShowRichTextInput(true);
  };

  const handleImageAddition = () => {
    setShowFileInput(true);
  };

  const handleArticleSubmition = () => {
    setArticles([...articles, content]);
    setContent([]);
  };

  return (
    <div className="content">
      <Form>
        {content.length > 0 && (
          <Form.Group className="mb-3">
            <Form.Label>Recent content:</Form.Label>
            {content.map((con) => (
              <Form.Control as="textarea" value={con} rows={2}></Form.Control>
            ))}
          </Form.Group>
        )}
        <div className="buttons">
          <div>
            <Button onClick={handleAddContent}>Add content</Button>
          </div>
          {content.length > 0 && (
            <div>
              <Button onClick={handleArticleSubmition}>Submit article</Button>
            </div>
          )}
        </div>

        <br />
        {buttonsGroupMode && (
          <ButtonGroup
            handleTextAddition={handleTextAddition}
            handleRichTextAddition={handleRichTextAddition}
            handleImageAddition={handleImageAddition}
          />
        )}
        <br />
        {showTextInput && (
          <AddNewText
            content={content}
            setContent={setContent}
            setButtonsGroupMode={setButtonsGroupMode}
            setShowTextInput={setShowTextInput}
          />
        )}
        <br />
        {showRichTextInput && (
          <AddNewRichText
            content={content}
            setContent={setContent}
            setButtonsGroupMode={setButtonsGroupMode}
            setShowRichTextInput={setShowRichTextInput}
          />
        )}
        <br />
        {showFileInput && (
          <AddNewImage
            content={content}
            setContent={setContent}
            setButtonsGroupMode={setButtonsGroupMode}
            setShowFileInput={setShowFileInput}
          />
        )}
      </Form>
    </div>
  );
};

export default ArticleForm;
