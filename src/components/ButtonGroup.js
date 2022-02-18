import React from "react";
import { Button } from "react-bootstrap";


const ButtonGroup = ({handleTextAddition, handleRichTextAddition, handleImageAddition}) =>{

    return(
        <div className="buttonsPanel">
            <Button onClick={handleTextAddition}>Add Text</Button>
            <Button onClick={handleRichTextAddition}>Add Rich Text</Button>
            <Button onClick={handleImageAddition}>Add Image</Button>
        </div>
    );
}

export default ButtonGroup;