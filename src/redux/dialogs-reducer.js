const SEND_MESSAGE = 'SEND_MESSAGE'


let initialState = {
    dialogs: [
        {id: 1, name: 'Sergei'},
        {id: 2, name: 'John'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Alex'},
        {id: 5, name: 'Valera'}
    ],

    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: '1'},
        {id: 3, message: '2'},
        {id: 4, message: '3'},
        {id: 5, message: '4'}
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type)  {
        case SEND_MESSAGE: 
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state
    }
} 

export const sendMessageCreator = (newMessageBody) => ({ type : SEND_MESSAGE, newMessageBody })

export default dialogsReducer