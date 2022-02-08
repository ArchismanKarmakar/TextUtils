import React from 'react';

export default function TextSummary(props) {
  return (
  <>
        <div className="container py-2" id="textsummary">
        <h2>Text Summary</h2>
        <span id="words"> {props.initialst.split(" ").length} words </span>|
        <span id="chars"> {props.initialst.length} characters </span>|
        <span id="timetoread"> {props.initialst.split(" ").length * 0.008} mins to read (approx)</span>
        <br />
        <h3><span id="errortext"></span></h3>
      </div>
  </>
  );
}
