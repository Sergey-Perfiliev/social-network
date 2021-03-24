import { stopSubmit } from "redux-form"
import { usersAPI, ProfileAPI } from "../api/api"
import { PostType, ContactsType, PhotosType, ProfileType } from '../Types/types'

// Action types
const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

// initial state
let initialState = {
	posts: [
		{ id: 0, message: 'Hi', likesCount: 0 },
		{ id: 1, message: 'React JS', likesCount: 17 },
		{ id: 2, message: 'Leeeeeeets gooooo!!!', likesCount: 5 },
	] as Array<PostType>,
	profile: null as ProfileType | null,
	status: '',
	newPostText: ''
}

export type InitialStateType = typeof initialState

// Profile Reducer
const profileReducer = (state = initialState, action: any): InitialStateType => {

	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 5,
				message: action.newPostText,
				likesCount: 0
			}
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: ''
			}
		}
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile
			}
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status
			}
		}
		case DELETE_POST: {
			return {
				...state,
				posts: state.posts.filter(p => p.id !== action.postId)
			}
		}
		case SAVE_PHOTO_SUCCESS: {
			return {
				...state,
				profile: {
					...state.profile,
					photos: action.photos
				} as ProfileType
			}
		}
		default:
			return state
	}
}

// Action creators
type AddPostActionCreatorActionType = {
	type: typeof ADD_POST
	newPostText: string
}
export const addPostActionCreator = (newPostText: string): AddPostActionCreatorActionType => ({ type: ADD_POST, newPostText })

type SetUserProfileActionType = {
	type: typeof SET_USER_PROFILE
	profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile })

type SetStatusActionType = {
	type: typeof SET_STATUS
	status: string
}
export const setStatus = (status: string): SetStatusActionType => ({ type: SET_STATUS, status })

type DeletePostActionType = {
	type: typeof DELETE_POST
	postId: number
}
export const deletePost = (postId: number): DeletePostActionType => ({ type: DELETE_POST, postId })

type SavePhotoSuccessActionType = {
	type: typeof SAVE_PHOTO_SUCCESS
	photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({ type: SAVE_PHOTO_SUCCESS, photos })


export const getUserProfile = (userId: number) => async (dispatch: any) => {
	let response = await usersAPI.getProfile(userId)
	dispatch(setUserProfile(response.data))
}

export const getStatus = (userId: number) => async (dispatch: any) => {
	let response = await ProfileAPI.getStatus(userId)
	dispatch(setStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: any) => {
	try {
		let response = await ProfileAPI.updateStatus(status)

		if (!response.data.resultCode)
			dispatch(setStatus(status))
	} catch(error) {
		console.log(error);
	}
}

export const savePhoto = (photo: any) => async (dispatch: any) => {
	let response = await ProfileAPI.savePhoto(photo)

	if (!response.data.resultCode)
		dispatch(savePhotoSuccess(response.data.data.photos))
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
	const userId = getState().auth.userId
	let response = await ProfileAPI.saveProfile(profile)

	if (!response.data.resultCode) {
		dispatch(getUserProfile(userId))
	} else {
		dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }))
		return Promise.reject(response.data.messages[0])
	}
}

export default profileReducer