import React, {useState} from "react";
import {Input} from "../input/Input";
import {useSelector} from "react-redux";
import {ContestCard} from "../contest-card/ContestCard";
import {Link} from "react-router-dom";

function Home() {
    const contestsData = useSelector(state => state.contestsList);
    const [contests, setContests] = useState(contestsData);

    const handleFilterChange = (e) => {
        const filterValue = e.target.value;
        const filteredData = contestsData.filter(contest => {
            return contest.name.toLowerCase().includes(filterValue.toLowerCase());
        })

        setContests(filteredData);
    }

    return (
        <div className="Home">
            <div className="Home-container">
                <div className="Home-content">
                    <header>
                        <Input placeholder="Search by contest name" onChange={handleFilterChange}/>
                        <Link to="/create">Create</Link>
                    </header>
                    <div className="Home-contests-container">
                        {contests.map((user, i) =>
                            <ContestCard
                                key={i}
                                contests={user}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
