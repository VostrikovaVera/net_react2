import * as React from "react";
import './Input.css';

export const Input = props => {
    const {placeholder, value, onChange} = props;

    return (
        <input type="text" placeholder={placeholder} onChange={onChange} className="Input" />
    )
}