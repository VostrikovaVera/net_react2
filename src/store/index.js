import {createStore} from 'redux';
import {initialState} from "./initialState";

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