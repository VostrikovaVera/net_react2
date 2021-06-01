import React, {useState} from "react";
import './CreateContest.css';
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import {Button} from "../button/Button";
import {Input} from "../input/Input";

function CreateContest() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [contestData, setContestData] = useState({
        name: '',
        id: uuidv4(),
        winner: null,
        status: 'active',
        participants: [],
    });

    const handleChangeName = e => {
        const name = e.target.value;
        setContestData({
            ...contestData,
            name,
        })
    }

    const handleSave = e => {
        e.preventDefault();
        dispatch({type: 'ADD_CONTEST', payload: contestData});
        history.push(`/${contestData.id}`)
    }

    return (
        <div className="CreateContest">
            <h2>Create contest</h2>
            <form onSubmit={handleSave}>
                <div className="CreateContest-form">
                    <label htmlFor="contestName">Contest name</label>
                    <Input
                        name="contestName"
                        placeholder="Enter contest name"
                        value={contestData.name}
                        onChange={handleChangeName}
                    />
                    <Button type="submit" text="Create" />
                </div>
            </form>
        </div>
    );
}

export default CreateContest;
