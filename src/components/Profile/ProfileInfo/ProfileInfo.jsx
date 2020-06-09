import React from 'react'
import s from './ProfileInfo.module.css'
import Loader from '../../Common/Loader'
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'


const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Loader />
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} />
                <ProfileStatusWithHooks status={status} 
                updateStatus={updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo