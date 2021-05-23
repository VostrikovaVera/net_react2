import React, { useState } from 'react';
import './WinnerInfo.css';
import {store} from "../../store/store";
import {Button} from "../button/Button";

export const WinnerInfo = props => {
    const [isWinnerShowing, setIsWinnerShowing] = useState(false);
    const [winner, setWinner] = useState(null);

    const handleShowWinner = () => {
        const winner = store.reduce((prev, curr) => {
            return prev.time < curr.time ? prev : curr
        });

        setWinner(winner);
        setIsWinnerShowing(true);
    }

    return (
        <div className="WinnerInfo">
            {!isWinnerShowing ? (
                <>
                    <h3>Total participants: {store.length}</h3>
                    <Button text="Show winner" onClick={handleShowWinner}/>
                </>
            ) : (
                <>
                    <h3>The winner</h3>
                    <p>ID: <span>{winner.id}</span></p>
                    <p>Name: <span>{`${winner.firstName} ${winner.lastName}`}</span></p>
                    <p>Time: <span>{new Date(winner.time * 1000).toISOString().substr(11, 8)}</span></p>
                </>
            )}

        </div>
    )
}