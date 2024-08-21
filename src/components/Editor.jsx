import React from 'react';

const Editor = ({ markdown, onChange }) => {
  return (
    <div className="editor">
      <h2>Markdown Input</h2>
      <textarea
        value={markdown}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type your markdown here..."
      />
    </div>
  );
};

export default Editor;
