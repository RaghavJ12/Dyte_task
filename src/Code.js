import React, { useState, useEffect } from "react";
import Prism from "prismjs";

const CodeEditor = props => {
  const [content, setContent] = useState(props.content);
  const [mo, setMo] = useState("");

  const handleKeyDown = evt => {
    let value = content,
      selStartPos = evt.currentTarget.selectionStart;

    // console.log(evt.currentTarget);

    if (evt.key === "Tab") {
      value =
        value.substring(0, selStartPos) +
        "    " +
        value.substring(selStartPos, value.length);
      evt.currentTarget.selectionStart = selStartPos + 3;
      evt.currentTarget.selectionEnd = selStartPos + 4;
      evt.preventDefault();

      setContent(value);
    }
  };
  
  const [btn1, setbtn1] = useState("");

  function compile() {
    setbtn1(content);
  }

  const [mab, setMab] = useState("white");
  
  console.log(props.language);
  useEffect(() => {
    Prism.highlightAll();
    // if(props.mode=="night")
    // {
    //   setMab('#323232');
    // }
    // else{
    //   setMab('white');
    // }
  }, [props.language, btn1]);


  return (
    <>
      <div class="columns">
        <div class="column is-6">
          <div className="code-edit-container">
            <div class="in">
              <textarea
                className="code-input box"
                value={content}
                onChange={evt => setContent(evt.target.value)}
                onKeyDown={handleKeyDown}
                style={{backgroundColor: '#323232', color:'white'}}
              />
            </div>
          </div>
          <div class="columns">
            <div class="column is-3 is-offset-9">
              <div class="button is-success" onClick={compile}>Live View &#8594;</div>
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div className="code-edit-container">
            <div class="out">
              <pre className="code-output">
                Output:
                <code className={`language-${props.language} my-6 mx-4`}>{btn1}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default CodeEditor;