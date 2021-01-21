import React from "react";

import "components/Button.scss";
import classNames from 'classnames/bind'; //why does this work???


export default function Button(props) {
  const buttonClass = classNames("button", {
    "button--confirm": props.confirm, //if props.confrim is true then it is added to the string after button
    "button--danger": props.danger
  });

  return (
    <button className={buttonClass} onClick={props.onClick} disabled={props.disabled} >
      {props.children}
    </button>
  );
}
