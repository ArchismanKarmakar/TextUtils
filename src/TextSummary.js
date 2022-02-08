import React from 'react';

export default function TextSummary(props) {
    return (
        props.initialst && <>
            <div className="container py-2" id="textsummary">

                <span id="words"> {props.initialst.split(" ").length} words </span>|
                <span id="chars"> {props.initialst.length} characters </span>|
                <span id="timetoread"> {props.initialst.split(" ").length * 0.008} mins to read (approx)</span>
                <br />
            </div>
        </>
    );
}
