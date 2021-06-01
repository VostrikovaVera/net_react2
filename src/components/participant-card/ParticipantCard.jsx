import * as React from "react";
import './ParticipantCard.css';
import {Button} from "../button/Button";
import {convertTime} from "../../helpers";
import {useDispatch} from "react-redux";

export const ParticipantCard = props => {
    const {user, contestId, contestStatus} = props;
    const dispatch = useDispatch();
    const {id, firstName, lastName, time} = user;

    const onDelete = () => {
        dispatch({type: 'DELETE_PARTICIPANT', payload: {
            contestId,
            participantId: id
        }});
    }

    return (
        <div className="ParticipantCard">
            <div className="ParticipantCard-content">
                <p>ID: <span>{id}</span></p>
                <p>Name: <span>{`${firstName} ${lastName}`}</span></p>
                <p>Time: <span>{convertTime(time)}</span></p>
            </div>

            {contestStatus === "active" && <Button text="Delete" onClick={onDelete} />}
        </div>
    )
}