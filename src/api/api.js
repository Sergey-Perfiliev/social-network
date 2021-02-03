import * as axios from 'axios'


const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "dd688653-66b2-418d-8675-cb796d5130d0"
	}
})

export const usersAPI = {
	requestUsers(Page = 1, pageSize = 10) {
		return instance.get(`users?page=${Page}&count=${pageSize}`)
			.then(response => {
				return response.data
			})
	},
	follow(userId) {
		return instance.post(`follow/${userId}`)
	},
	unfollow(userId) {
		return instance.delete(`follow/${userId}`)
	},
	getProfile(userId) {
		console.warn('Please use profileApi object')
		return ProfileAPI.getProfile(userId)
	}
}

export const ProfileAPI = {
	getProfile(userId) {
		return instance.get(`profile/${userId}`)
	},
	getStatus(userId) {
		return instance.get(`profile/status/${userId}`)
	},
	updateStatus(status) {
		return instance.put(`profile/status`, { status: status })
	},
	savePhoto(photo) {
		var formData = new FormData();
		formData.append("image", photo)

		return instance.put(`profile/photo`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
	},
	saveProfile(profile) {
		return instance.put(`profile`, profile)
	}
}

export const authAPI = {
	me() {
		return instance.get(`auth/me`)
	},
	login(email, password, rememberMe = false, captcha = null) {
		return instance.post(`auth/login`, { email, password, rememberMe, captcha })
	},
	logout() {
		return instance.delete(`auth/login`)
	}
}

export const securityAPI = {
	getCaptchaUrl() {
		return instance.put(`security/get-captcha-url`)
	}
}