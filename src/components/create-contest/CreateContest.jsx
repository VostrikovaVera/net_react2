import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

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
            <form onSubmit={handleSave}>
                <input
                    name="contestName"
                    type="text"
                    placeholder="Enter contest name"
                    value={contestData.name}
                    onChange={handleChangeName}
                />
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default CreateContest;
