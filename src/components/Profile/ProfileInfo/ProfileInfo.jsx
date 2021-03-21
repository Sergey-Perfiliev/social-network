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
			.then(() => setEditMode(false));
	}

	return (
		<div className={s.descriptionBlock}>
			<div className={s.descriptionAvatar}>
				<img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
				{isOwner && <label class={s.profileFileUpload}>
    			<input type="file"/>Update Profile photo
				</label>}
			</div>
			<div>
				<div className={s.mainProfileInfo}>
					<h2 className={s.ProfileFullName}>{profile.fullName}</h2>
					<ProfileStatusWithHooks status={status}
						updateStatus={updateStatus} />
				</div>

				{editMode ?
					<ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} /> :
					<ProfileData profile={profile}
						isOwner={isOwner}
						goToEditMode={() => setEditMode(true)} />}
			</div>
		</div>
	)
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
	const [detailedInfoMode, setDetailedInfoMode] = useState(false)

	return <div className={s.ProfileData}>
		<div className={s.ProfileDataRow}>
			<label className={s.ProfileDataLabel}>Looking for a job:</label><p className={s.ProfileDataDesc}>{profile.lookingForAJob ? "yes" : "no"}</p>
		</div>

		{profile.lookingForAJob &&
			<div className={s.ProfileDataRow}>
				<label className={s.ProfileDataLabel}>Professional skills:</label><p className={s.ProfileDataDesc}>{profile.lookingForAJobDescription}</p>
			</div>
		}

		<button onClick={() => setDetailedInfoMode(!detailedInfoMode)}
			className={s.ProfileDataBtn} >
			Show detailed information
		</button>

		{detailedInfoMode &&
			<>
				<div className={s.ProfileDataRow}>
					<label className={s.ProfileDataLabel}>About me:</label><p className={s.ProfileDataDesc}>{profile.aboutMe}</p>
				</div>
						Contacts: {Object.keys(profile.contacts).map(key => {
					return <Contact contactTitle={key} key={key} contactValue={profile.contacts[key]} />
				})}
			</>
		}

		{
			isOwner &&
			<button onClick={goToEditMode} className={s.editBtn}>edit</button>
		}
	</div >
}

const Contact = ({ contactTitle, contactValue }) => {
	return contactValue !== '' && <div className={s.ProfileDataRow}>
		<label className={s.ProfileDataLabel}>{contactTitle}:</label><p className={s.ProfileDataDesc}>{contactValue}</p>
	</div>
}

export default ProfileInfo