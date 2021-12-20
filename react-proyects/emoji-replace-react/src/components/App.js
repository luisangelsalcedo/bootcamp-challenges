import { useState } from "react";

function App() {


  const [text, setText] = useState('hola estado inicial');
  const onChangeTextArea = e => {
    setText(e.target.value);
  }

  return (
    <div className="App">
      <textarea cols="30" rows="10" onChange={onChangeTextArea}></textarea>
      <p>{text}</p>
    </div>
  );
}

export default App;
