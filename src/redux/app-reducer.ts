import { getAuthUserData } from "./auth-reducer"

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

// export type InitialStateType = typeof initialState;

export type InitialStateType = {
	initialized: Boolean
};

let initialState: InitialStateType = {
	initialized: false
}

const appReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true
			}

		default:
			return state
	}
}

type InitializedSuccessActionType = {
	// typeof return the value of INITIALIZED_SUCCESS
	type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = (): InitializedSuccessActionType => ({ type: INITIALIZED_SUCCESS })

export const initializeApp = () => (dispatch: any) => {
	let promise = dispatch(getAuthUserData())

	Promise.all([promise])
		.then(() => {
			dispatch(initializedSuccess())
		})
}


export default appReducer