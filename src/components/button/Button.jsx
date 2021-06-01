import * as React from "react";
import './Button.css';

export const Button = props => {
    const {text, onClick, type} = props;

    return (
        <button onClick={onClick} className="Button" type={type ?? "button"}>{text}</button>
    )
}