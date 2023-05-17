
import Form1 from "./Components/Form1.js";
import Text from "./Components/Text.js";
import Form from "./Components/Form.js";
import Text2 from "./Components/Text2.js";
import React, { useState } from "react";
import "./App.css";

const App = () => {

  let [text,setText] = useState("");
  let [sums,setSums]=useState("");
  console.log(sums);

  return (
    <div className="app">
      <div className="app-container">
      <Text />
      <hr/>
      <Form/>
      <Form1 updateText={setText} addData={setSums}>
        <p>{text}</p>
        <p>{(sums)?sums:""}</p>
       </Form1>
       <hr/>
       <br/>
        <Text2/>
      </div>
      
    </div>
  )
}

export default App;