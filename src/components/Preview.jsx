import React from 'react';
import { marked } from 'marked';

const Preview = ({ markdown }) => {
  return (
    <div className="preview">
      <h2>Preview</h2>
      <div
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </div>
  );
};

export default Preview;
