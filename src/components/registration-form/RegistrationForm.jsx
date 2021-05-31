import * as React from "react";
import './RegistrationForm.css';
import {useDispatch} from "react-redux";
import {useState} from "react";
import {convertTime} from "../../helpers";
import {v4 as uuidv4} from 'uuid';

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
                <div>
                    <h3>New participant</h3>
                    <form onSubmit={handleRegister}>
                        <input
                            name="firstName"
                            type="text"
                            placeholder="Enter first name..."
                            value={participantData.firstName}
                            onChange={(e) => {
                                setParticipantData({
                                    ...participantData,
                                    firstName: e.target.value
                                })
                            }}
                        />
                        <input
                            name="lastName"
                            type="text"
                            placeholder="Enter last name..."
                            value={participantData.lastName}
                            onChange={(e) => {
                                setParticipantData({
                                    ...participantData,
                                    lastName: e.target.value
                                })
                            }}
                        />
                        <button type="submit">Register</button>
                    </form>
                </div>
            ) : (
                <div>
                    <h3>Participant {participantData.name}</h3>
                    <form onSubmit={handleSave}>
                        <input
                            name="time"
                            type="text"
                            placeholder="Enter time in seconds..."
                            value={participantData.time}
                            onChange={handleChangeTime}
                        />
                        <h3>Time: {convertTime(participantData.time)}</h3>
                        <button type="submit">Save</button>
                        <button onClick={handleCancel} type="button">Cancel</button>
                    </form>
                </div>
            )}
        </div>
    )
}