import * as React from "react";
import './ContestCard.css';
import {Link} from "react-router-dom";
import {Button} from "../button/Button";

export const ContestCard = props => {
    const {contests} = props;
    const {id, name, status, winner} = contests;

    return (
        <div className="ContestCard">
            <div className="ContestCard-content">
                <p>ID: <span>{id}</span></p>
                <p>Name: <span>{name}</span></p>
                <p>Status: <span>{status}</span></p>
                {winner && (
                    <p>Winner: <span>{`${winner.firstName} ${winner.lastName}`}</span></p>
                )}
            </div>

            <Link to={`/${id}`} className="ContestCard-link">
                <Button text="Show" />
            </Link>
        </div>
    )
}