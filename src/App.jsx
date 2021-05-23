import React, { useState } from 'react';
import './App.css';
import {UserCard} from "./components/user-card/UserCard";
import {store} from "./store/store";
import {Input} from "./components/input/Input";
import {RegistrationForm} from "./components/registration-form/RegistrationForm";
import {WinnerInfo} from "./components/winner-info/WinnerInfo";

function App() {
  const [userData, setUserData] = useState(store);

  const handleFilterChange = (e) => {
    const filterValue = e.target.value;
    const filteredData = store.filter(user => {
      return user.firstName.toLowerCase().includes(filterValue.toLowerCase()) ||
          user.lastName.toLowerCase().includes(filterValue.toLowerCase()) ||
          user.id.includes(filterValue);
    })

    setUserData(filteredData);
  }

  // Math.ceil(Math.random() * 1000000000)

  return (
    <div className="App">
      <div className="App-container">
        <div className="App-content-left">
          <Input placeholder="Search by user name" onChange={handleFilterChange}/>
          <div className="App-users-container">
            {userData.map((user, i) => <UserCard key={i} users={user} />)}
          </div>
        </div>
        <div className="App-content-right">
          <RegistrationForm />
          <WinnerInfo />
        </div>
      </div>
    </div>
  );
}

export default App;
