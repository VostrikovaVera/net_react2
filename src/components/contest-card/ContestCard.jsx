import * as React from "react";
import './ContestCard.css';
import {Link} from "react-router-dom";

export const ContestCard = props => {
    const {contests} = props;
    const {id, name, status, winner} = contests;

    return (
        <div className="ContestCard">
            <p>ID: <span>{id}</span></p>
            <p>Name: <span>{name}</span></p>
            <p>Status: <span>{status}</span></p>
            {winner && (
                <p>Winner: <span>{`${winner.firstName} ${winner.lastName}`}</span></p>
            )}

            <Link to={`/${id}`}>Show</Link>
        </div>
    )
}