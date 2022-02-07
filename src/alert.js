import React from 'react';
import "./alert.css";

export default function alert(props) {

    function capitalize(word) {
        word = word.toLowerCase();
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }

    return (
        props.alert && <>
            <div className={`alert alert-${props.alert.type} alert-dismissible`} role="alert">
                <strong>{capitalize(props.alert.type)}:</strong> <span className='msg' id="msg2">{props.alert.msg}</span>
                {/* {props.alert.msg}. */}
            </div>

        </>
    );
}
