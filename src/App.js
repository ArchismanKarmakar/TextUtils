// import logo from './logo.svg';
import './App.css';
// import Particles from "react-tsparticles";
import Navbar from './navbar';
import React, { useState } from 'react';
import { render } from '@testing-library/react';
// import ScriptTag from 'react-script-tag';
import ReactDOM from 'react-dom';
import Alert from './alert';
import { type } from '@testing-library/user-event/dist/type';
// import reactDom from 'react-dom';

function App() {

  const toUprCs = () => {
    let newTxt = initialst.toUpperCase();
    finalst(newTxt);
    showAlert("Converted to upper case", "success");
  }
  const toLwrCs = () => {
    let newTxt = initialst.toLowerCase();
    finalst(newTxt);
    showAlert("Converted to lower case", "success");
  }
  const Reset = () => {
    finalst("");
    showAlert("Cleared", "success");
  }
  const replaceWrds = () => {
    let newTxt = initialst;
    let word = window.prompt("Enter a word to replace: ");
    if (newTxt.indexOf(word) === -1) {
      document.getElementById("errortext").innerText = "No such word found!"
      setTimeout(() => {
        document.getElementById("errortext").innerText = "";
      }, 2000);
      setTimeout(() => {
        return;
      }, 2000);
    } else {
      let repwo = window.prompt("Enter the word to replace with: ");
      newTxt = newTxt.replace(word, repwo);
      finalst(newTxt);
      showAlert("Replaced the mentioned word at every occurances.", "success");
    }
  }
  const rBlnksp = () => {
    let newTxt = initialst;
    newTxt = newTxt.replace(/\s+/g, ' ').trim();
    finalst(newTxt);
    showAlert("All extra spaces removed", "success");
  }
  const wUprCs = () => {
    let newTxt = initialst;
    newTxt = newTxt.replace(/\s+/g, ' ').trim();
    var words = newTxt.split(' ');
    var CapitalizedWords = [];
    words.forEach(element => {
      CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));
    });
    newTxt = CapitalizedWords.join(' ');
    finalst(newTxt);
    showAlert("Word initials converted to upper case", "success");
  }
  const updatest = (event) => {
    finalst(event.target.value);
  }


  const [initialst, finalst] = useState("");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  return (
    <>
      < Navbar />
      {/* <h1 onLoad="showAlert('123','warning')"></h1> */}
      <Alert alert={alert} />
      <div className="container">

        <div className="form-floating py-5 my-5">
          <textarea className="form-control" placeholder="Enter your text here !" id="floatingTextarea2" style={{ height: "200px" }} value={initialst} onChange={updatest}></textarea>
          <label htmlFor="floatingTextarea2" className='fs-5'>Enter Your Text</label>
        </div>

        <button className="btn btn-danger" style={{ margin: "8px" }} onClick={toUprCs}>To UpperCase</button>
        <button className="btn btn-danger" style={{ margin: "8px" }} onClick={toLwrCs}>To LowerCase</button>
        <button className="btn btn-danger" style={{ margin: "8px" }} onClick={Reset}>Reset</button>
        <button className="btn btn-danger" style={{ margin: "8px" }} onClick={wUprCs}>Word Initials UpperCase</button>
        <button className="btn btn-danger" style={{ margin: "8px" }} onClick={rBlnksp}>Remove Extra Spaces</button>
        <button className="btn btn-danger" style={{ margin: "8px" }} onClick={replaceWrds}>Replace Words</button>
      </div>
      <div className="container py-2" id="textsummary">
        <h2>Text Summary</h2>
        <span id="words"> {initialst.split(" ").length} words </span>|
        <span id="chars"> {initialst.length} characters </span>|
        <span id="timetoread"> {initialst.split(" ").length * 0.008} mins to read (approx)</span>
        <br />
        <h3><span id="errortext"></span></h3>
      </div>

    </>
  );
}

export default App;
