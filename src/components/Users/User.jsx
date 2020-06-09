import React from 'react'
import s from './users.module.css'
import userPhoto from '../../assets/userPhoto.jpg'
import { NavLink } from 'react-router-dom'


let User = ({user, unfollow, follow, followingInProgress}) => {
    return <div>
        <span>
            <div> 
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.userPhoto}/>
                </NavLink>
            </div>
            <div>
                {user.followed ? 
                    <button disabled={followingInProgress.some(id => id === user.id)} 
                        onClick={() => {unfollow(user.id)}}>
                        Unfollow
                    </button> : 
                    <button disabled={followingInProgress.some(id => id === user.id)} 
                        onClick={() => {follow(user.id)}}>
                        Follow
                    </button>}
            </div>
        </span>
        <span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
            </span>
        </span>
    </div>
}

export default User