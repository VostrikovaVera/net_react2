import {createStore} from 'redux';

/*contestsList: [
    {
        id: 'hjkg232-h234h-23h3', // id соревнования
        name: 'Бег на 100 метров', // название соревнования
        winner: {
            name: 'Vasya', // имя победителя
            time: 60, // время выполнения задачи соревнования
        },
        status: 'finished' // статус соревнования,
        participants: [{name: 'Katya', time: 120}, ...] // список участников
    },
    {
        id: 'hjkg232-h234h-23h3', // id соревнования
        name: 'Бег на 100 метров', // название соревнования
        winner: null,
        status: 'active' // статус соревнования,
        participants: [{name: 'Vasya', time: 90}, ...] // список участников
    }
]*/

// Math.ceil(Math.random() * 1000000000)

const initialState = {
    contestsList: [
        {
            id: 'hjkg232-h234h-23h3',
            name: 'Бег на 100 метров',
            winner: {
                id: '59830cab-8a98-4549-9a51-f2680938576c',
                firstName: 'Vasya',
                lastName: 'Fedorov',
                time: 60,
            },
            status: 'finished',
            participants: [{id: '572c0a4f-21fa-4cf1-9d17-d0b45c048b68', firstName: 'Katya', lastName: 'Ivanova', time: 120}]
        },
        {
            id: 'hjkg232-h234h-24h3',
            name: 'Бег на 200 метров',
            winner: null,
            status: 'active',
            participants: [{id: '59830cab-8a98-4549-9a51-f2680938576c', firstName: 'Vasya', lastName: 'Fedorov', time: 90}, {id: '572c0a4f-21fa-4cf1-9d17-d0b45c048b68', firstName: 'Katya', lastName: 'Ivanova', time: 120}]
        }
    ]
}

const reducer = (store = initialState, action) => {
    switch (action.type){
        case 'ADD_CONTEST':
            return {
                ...store,
                contestsList: [...store.contestsList, action.payload]
            }
        case 'ADD_PARTICIPANT':
            return {
                ...store,
                contestsList: store.contestsList.map((contest) => {
                    if (contest.id !== action.payload.contestId) {
                        return contest
                    }

                    return {
                        ...contest,
                        participants: [...contest.participants, action.payload.participant]
                    }
                })
            }
        case 'DELETE_PARTICIPANT':
            return {
                ...store,
                contestsList: store.contestsList.map((contest) => {
                    if (contest.id !== action.payload.contestId) {
                        return contest
                    }

                    return {
                        ...contest,
                        participants: contest.participants
                            .filter(participant => {
                                return participant.id !== action.payload.participantId
                            })
                    }
                })
            }
        case 'SHOW_WINNER':
            return {
                ...store,
                contestsList: store.contestsList.map((contest) => {
                    if (contest.id !== action.payload.contestId) {
                        return contest
                    }

                    return {
                        ...contest,
                        winner: contest.participants.sort((a,b) => a.time - b.time)[0],
                        status: 'finished'
                    }
                })
            }
        default:
            return store;
    }
}

const store = createStore(reducer);

export default store;