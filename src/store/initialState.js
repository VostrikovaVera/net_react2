export const initialState = {
    contestsList: [
        {
            id: '8f852c81-f72c-424a-9f22-f2b78e321ff0',
            name: 'Eating pizza',
            winner: {
                id: '59830cab-8a98-4549-9a51-f2680938576c',
                firstName: 'Joey',
                lastName: 'Tribiani',
                time: 60,
            },
            status: 'finished',
            participants: [
                {
                    id: '572c0a4f-21fa-4cf1-9d17-d0b45c048b68',
                    firstName: 'Ross',
                    lastName: 'Geller',
                    time: 120
                },
                {
                    id: '59830cab-8a98-4549-9a51-f2680938576c',
                    firstName: 'Joey',
                    lastName: 'Tribiani',
                    time: 60,
                },
                {
                    id: 'a1528cfd-009f-4a44-9326-8a51ede10286',
                    firstName: 'Chandler',
                    lastName: 'Bing',
                    time: 110,
                }
            ]
        },
        {
            id: '7a047853-ecf7-4508-9988-a6a97e28423b',
            name: 'Cooking pies',
            winner: null,
            status: 'active',
            participants: [
                {
                    id: '59830cab-8a98-4549-9a51-f2680938576c',
                    firstName: 'Monica',
                    lastName: 'Geller',
                    time: 1532
                },
                {
                    id: '572c0a4f-21fa-4cf1-9d17-d0b45c048b68',
                    firstName: 'Rachel',
                    lastName: 'Green',
                    time: 2875
                },
                {
                    id: '4bc7895a-b9bf-4aba-b732-4aa57c3442ca',
                    firstName: 'Phoebe',
                    lastName: 'Buffay',
                    time: 2478
                }
            ]
        }
    ]
}