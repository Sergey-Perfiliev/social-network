const SEND_MESSAGE = 'SEND_MESSAGE'

type DialogType = {
	id: number,
	name: string
}

type MessageType = {
	id: number,
	message: string
}

let initialState = {
	dialogs: [
		{ id: 1, name: 'Sergei' },
		{ id: 2, name: 'John' },
		{ id: 3, name: 'Sasha' },
		{ id: 4, name: 'Alex' },
		{ id: 5, name: 'Valera' }
	] as Array<DialogType>,

	messages: [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: '1' },
		{ id: 3, message: '2' },
	] as Array<MessageType>
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case SEND_MESSAGE:
			let body = action.newMessageBody
			return {
				...state,
				messages: [...state.messages, { id: 6, message: body }]
			}

		default:
			return state
	}
}

type sendMessageCreatorActionType = {
	type: typeof SEND_MESSAGE,
	newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): sendMessageCreatorActionType => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer