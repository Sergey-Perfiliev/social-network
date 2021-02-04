import { stopSubmit } from "redux-form"
import { usersAPI, ProfileAPI } from "../api/api"

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS' 
const DELETE_POST = 'DELETE_POST' 
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'


let initialState = {
	posts: [
		{id: 0, message: 'Hi', likesCount:'0'},
		{id: 1, message: 'My 1st post', likesCount:'1'},
		{id: 2, message: 'My 2nd post', likesCount:'2'},
	],
	profile: null,
	status: ''
}

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id : 5,
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
				}
			}
		}
		default:
			return state
	}      
} 

export const addPostActionCreator = (newPostText) => ({ type : ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type : SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type : SET_STATUS, status })
export const deletePost = (postId) => ({ type : DELETE_POST, postId })
export const savaPhotoSuccess = (photos) => ({ type : SAVE_PHOTO_SUCCESS, photos })


export const getUserProfile = (userId) => async(dispatch) => {
	let response = await usersAPI.getProfile(userId)
	dispatch(setUserProfile(response.data))
}

export const getStatus = (userId) => async(dispatch) => {
	let response = await ProfileAPI.getStatus(userId)
	dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async(dispatch) => {
	let response = await ProfileAPI.updateStatus(status)
	
	if (!response.data.resultCode)
		dispatch(setStatus(status))
}

export const savePhoto = (photo) => async(dispatch) => {
	let response = await ProfileAPI.savePhoto(photo)

	if (!response.data.resultCode)
		dispatch(savaPhotoSuccess(response.data.data.photos))
}

export const saveProfile = (profile) => async(dispatch, getState) => {
	const userId = getState().auth.userId
	let response = await ProfileAPI.saveProfile(profile)

	if (!response.data.resultCode) {
		dispatch(getUserProfile(userId))
	} else {
		dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}))
		return Promise.reject(response.data.messages[0])
	}
}

export default profileReducer