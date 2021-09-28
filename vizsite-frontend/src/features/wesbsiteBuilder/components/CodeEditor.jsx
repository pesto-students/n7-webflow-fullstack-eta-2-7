/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';

const CodeEditor = (props) => {
  const { content: initialContent } = props;
  const [content] = useState(initialContent || '');

  useEffect(() => {
    Prism.highlightAll();
  }, ['markup', content, initialContent]);

  return (
    <>
      <div className="code-edit-container">
        <textarea
          className="code-input"
          value={initialContent}
        />
        <pre className="code-output">
          {/* Have an issue with styles, will uncomment below code once we fix it */}
          {/* <code className="language-markup">{initialContent}</code> */}
        </pre>
      </div>
    </>
  );
};

export default CodeEditor;
