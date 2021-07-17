import React, { useState ,useEffect } from "react";
import 'bulma/css/bulma.css'

import "./index.css";
import "./daynight.css";

import CodeEditor from "./Code";
import TreeComp from "./trees";

export default function App() {
  const [editorLanguage, setEditorLanguage] = useState("markup");

  const [mode, setMode] = useState("day");
  const [mt, setMt] = useState("black");
  const [mab, setMab] = useState("white");
  const [bool, setBool] = useState(0);
  function toggle() {
    setMode(mode === "day" ? "night" : "day");
  }

  useEffect(()=>{
    if(mode==="night")
    {
      setMt("white");
      setMab("black");
      setBool(1);
    }
    else if(mode==="day")
    {
      setMt("black");
      setMab("white");
      setBool(0);
    }
  })

  return (
    <div className="App container px-2" style={{ color: "white", backgroundColor: "rgb(107, 107, 146)"}}>
      <br />
      <p class="is-size-2">Dyte Code Editor</p>

      <div class="columns is-size-5 my-6">
        <div class="column is-3">
          <fieldset>
            <legend>Choose language:</legend>
            <input
              type="radio"
              id="html"
              name="language"
              value="markup"
              checked={editorLanguage === "markup"}
              onChange={() => setEditorLanguage("markup")}
            />
            <label htmlFor="xml" class="mx-3">HTML</label>
            <input
              type="radio"
              id="css"
              name="language"
              value="css"
              checked={editorLanguage === "css"}
              onChange={() => setEditorLanguage("css")}
            />
            <label htmlFor="css" class="mx-3">CSS</label>
            <input
              type="radio"
              id="javascript"
              name="language"
              value="javascript"
              checked={editorLanguage === "javascript"}
              onChange={() => setEditorLanguage("javascript")}
            />
            <label htmlFor="javascript" class="mx-3">JavaScript</label>
          </fieldset>
        </div>

        <div class="column is-3 is-offset-6">
          <br/>
          <label class="mx-3">Day Mode</label>
          <label class="switch">
            <input type="checkbox" onClick={toggle}/>
            <span class="slider round"></span>
          </label>
          <label class="mx-3">Night Mode</label>
        </div>
      </div>
      <div class="columns">
        <div class="column is-2">
          <TreeComp />
        </div>
        <div class="column is-10">
          <CodeEditor language={editorLanguage} mod={mode}/>
        </div>
      </div>
    </div>
  );
}