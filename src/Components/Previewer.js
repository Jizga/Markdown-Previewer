import React from "react";
import ReactMarkdown from 'react-markdown'


export default function Previewer(props) {
  return (
    <div>
      <div id="preview">
        <ReactMarkdown source={props.text} />
      </div>
    </div>
  );
}
