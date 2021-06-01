import * as React from "react";
import './Input.css';

export const Input = props => {
    const {placeholder, value, name, onChange} = props;

    return (
        <input
            name={name}
            id={name}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="Input"
        />
    )
}