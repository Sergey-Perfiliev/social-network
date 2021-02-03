import React, { useState } from 'react'
import s from './ProfileInfo.module.css'
import Loader from '../../Common/Loader'
import userPhoto from '../../../assets/userPhoto.jpg'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import ProfileDataForm from './ProfileDataForm'


const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
	const [editMode, setEditMode] = useState(false)

	if (!profile) {
		return <Loader />
	}

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0])
		}
	}

	const onSubmit = (formData) => {
		saveProfile(formData)
		.then(
			() => {
				setEditMode(false)
			}
		);
	}

	return (
		<div>
			<div className={s.descriptionBlock}>
				<img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
				{isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}

				{editMode ?
					<ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} /> :
					<ProfileData profile={profile}
						isOwner={isOwner}
						goToEditMode={() => setEditMode(true)} />}

				<ProfileStatusWithHooks status={status}
					updateStatus={updateStatus} />
			</div>
		</div>
	)
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
	return <div>
		{isOwner &&
			<button onClick={goToEditMode}>edit</button>
		}
		<div>
			Fullname : {profile.fullName}
		</div>
		<div>
			Looking for a job: {profile.lookingForAJob ? "yes" : "no"}
		</div>
		{profile.lookingForAJob &&
			<div>
				Professional skills: {profile.lookingForAJobDescription}
			</div>
		}
		<div>
			About me: {profile.aboutMe}
		</div>
		<div>
			Contacts: {Object.keys(profile.contacts).map(key => {
			return <Contact contactTitle={key} key={key} contactValue={profile.contacts[key]} />
		})}
		</div>

	</div>
}

const Contact = ({ contactTitle, contactValue }) => {
	return <div className={s.contact}>{contactTitle}: {contactValue}</div>
}

export default ProfileInfo