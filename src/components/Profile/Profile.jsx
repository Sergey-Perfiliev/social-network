import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './myPosts/MyPostsContainer'
import s from './Profile.module.css'


const Profile = (props) => {
	return (
		<div className={s.Profile}>
			<ProfileInfo isOwner={props.isOwner}
				profile={props.profile}
				status={props.status}
				updateStatus={props.updateStatus}
				savePhoto={props.savePhoto}
				saveProfile={props.saveProfile} />
			<MyPostsContainer />
		</div>
	)
}

export default Profile