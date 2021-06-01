import * as React from "react";
import './RegistrationForm.css';
import {useDispatch} from "react-redux";
import {useState} from "react";
import {convertTime} from "../../helpers";
import {v4 as uuidv4} from 'uuid';
import {Button} from "../button/Button";
import {Input} from "../input/Input";

export const RegistrationForm = ({contestId}) => {
    const dispatch = useDispatch();
    const [isRegistered, setIsRegistered] = useState(false);
    const [participantData, setParticipantData] = useState({
        firstName: '',
        lastName: '',
        time: 0,
    })

    const handleRegister = (e) => {
        e.preventDefault();

        if (!participantData.firstName.length || !participantData.lastName.length) {
            return;
        }

        setParticipantData({
            ...participantData,
            id: uuidv4()
        });

        setIsRegistered(!isRegistered);
    }

    const handleChangeTime = e => {
        const time = e.target.value;

        if (Number.isNaN(+time)) {
            return
        }

        setParticipantData({
            ...participantData,
            time: +time
        });

        e.target.value = '';
    }

    const handleSave = e => {
        e.preventDefault();

        dispatch({type: 'ADD_PARTICIPANT', payload: {
            contestId,
            participant: participantData,
        }});

        setParticipantData({
            firstName: '',
            lastName: '',
            time: 0,
        });
        setIsRegistered(false);
    }

    const handleCancel = () => {
        setParticipantData({
            firstName: '',
            lastName: '',
            time: 0,
        });
        setIsRegistered(false);
    }

    return (
        <div className="RegistrationForm">
            {!isRegistered ? (
                <>
                    <h3>New participant</h3>
                    <form onSubmit={handleRegister}>
                        <Input
                            name="firstName"
                            placeholder="Enter first name..."
                            value={participantData.firstName}
                            onChange={(e) => {
                                setParticipantData({
                                    ...participantData,
                                    firstName: e.target.value
                                })
                            }}
                        />
                        <Input
                            name="lastName"
                            placeholder="Enter last name..."
                            value={participantData.lastName}
                            onChange={(e) => {
                                setParticipantData({
                                    ...participantData,
                                    lastName: e.target.value
                                })
                            }}
                        />
                        <Button type="submit" text="Register" />
                    </form>
                </>
            ) : (
                <>
                    <h3>Participant {participantData.name}</h3>
                    <form onSubmit={handleSave}>
                        <Input
                            name="time"
                            placeholder="Enter time in seconds..."
                            value={participantData.time}
                            onChange={handleChangeTime}
                        />
                        <h3>Time: {convertTime(participantData.time)}</h3>
                        <div className="RegistrationForm-btns">
                            <Button type="submit" text="Save" />
                            <Button text="Cancel" onClick={handleCancel} />
                        </div>
                    </form>
                </>
            )}
        </div>
    )
}