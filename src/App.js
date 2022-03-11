import React, { useState } from 'react';
import './App.css';

function App(){
  const [text, setText] = useState("")

  const count = (e) => {
    setText(e.target.value)
  }
    
  return <div>
  <h1>word and character counter</h1>
  <textarea id="textarea" onChange={count} cols="30" rows="10" ></textarea>
  <p>
    [{text.split(" ").length}]  words and [{text.length}] characters
  </p>
  </div>
}

export default App;


