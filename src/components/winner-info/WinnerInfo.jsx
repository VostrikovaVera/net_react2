import React from 'react';
import './WinnerInfo.css';
import {Button} from "../button/Button";
import {convertTime} from "../../helpers";
import {useDispatch, useSelector} from "react-redux";

export const WinnerInfo = ({contestId}) => {
    const dispatch = useDispatch();
    const participants = useSelector(state => state.contestsList.find(c => c.id === contestId).participants);
    const winner = useSelector(state => state.contestsList.find(c => c.id === contestId).winner);

    const handleShowWinner = () => {
        dispatch({type: 'SHOW_WINNER', payload: {
            contestId,
        }});
    }

    return (
        <div className="WinnerInfo">
            {!winner ? (
                <>
                    <h3>Total participants: {participants?.length}</h3>
                    <Button text="Show winner" onClick={handleShowWinner}/>
                </>
            ) : (
                <>
                    <h3>The winner</h3>
                    <p>ID: <span>{winner.id}</span></p>
                    <p>Name: <span>{`${winner.firstName} ${winner.lastName}`}</span></p>
                    <p>Time: <span>{convertTime(winner.time)}</span></p>
                </>
            )}
        </div>
    )
}