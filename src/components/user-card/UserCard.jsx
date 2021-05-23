import * as React from "react";
import './UserCard.css';
import {Button} from "../button/Button";

export const UserCard = props => {
    const {users, onDelete} = props;
    const {id, firstName, lastName, time} = users;

    return (
        <div className="UserCard">
            <p>ID: <span>{id}</span></p>
            <p>Name: <span>{`${firstName} ${lastName}`}</span></p>
            <p>Time: <span>{time}</span></p>

            <Button text="Delete" onClick={onDelete} />
        </div>
    )
}