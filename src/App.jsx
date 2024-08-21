import React, { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import './App.css';

const App = () => {
  const [markdown, setMarkdown] = useState('# Welcome to Markdown Previewer');

  return (
    <div className="app">
      <h1 className='header'>Markdown Previewer</h1>
      <div className="container">
        <Editor markdown={markdown} onChange={setMarkdown} />
        <Preview markdown={markdown} />
      </div>
    </div>
  );
};

export default App;
