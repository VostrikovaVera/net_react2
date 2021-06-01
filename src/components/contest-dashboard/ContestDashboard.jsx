import React, {useState, useEffect} from "react";
import './ContestDashboard.css';
import {Input} from "../input/Input";
import {ParticipantCard} from "../participant-card/ParticipantCard";
import {RegistrationForm} from "../registration-form/RegistrationForm";
import {WinnerInfo} from "../winner-info/WinnerInfo";
import {useSelector} from "react-redux";

function ContestDashboard(props) {
    const contestId = props.match.params.id;
    const contestStatus = useSelector(state =>
        state.contestsList.find(c => c.id === contestId).status
    );
    const participantsData = useSelector(state =>
        state.contestsList.find(c => c.id === contestId).participants
    );
    const [participants, setParticipants] = useState(participantsData);

    useEffect(() => setParticipants([...participantsData]), [participantsData])

    const handleFilterChange = (e) => {
        const filterValue = e.target.value;
        const filteredData = participantsData.filter(user => {
            return user.firstName.toLowerCase().includes(filterValue.toLowerCase()) ||
                user.lastName.toLowerCase().includes(filterValue.toLowerCase()) ||
                user.id.includes(filterValue);
        })
        setParticipants(filteredData);
    }

    return (
        <div className="ContestDashboard">
            <div className="ContestDashboard-content-left">
                <header className="ContestDashboard-header">
                    <Input placeholder="Search by user name" onChange={handleFilterChange}/>
                </header>
                {participants.length ? (
                    <div className="ContestDashboard-users-container">
                        {participants.map((user, i) =>
                            <ParticipantCard
                                key={i}
                                user={user}
                                contestId={contestId}
                                contestStatus={contestStatus}
                            />)}
                    </div>
                ) : (
                    <h2>There are no participants so far...</h2>
                )}
            </div>
            <div className="ContestDashboard-content-right">
                {contestStatus === "active" && <RegistrationForm contestId={contestId} contestStatus={contestStatus} />}
                <WinnerInfo contestId={contestId} />
            </div>
        </div>
    );
}

export default ContestDashboard;
