import * as React from "react";
import './Button.css';

export const Button = props => {
    const {text, onClick} = props;

    return (
        <button onClick={onClick} className="Button">{text}</button>
    )
}