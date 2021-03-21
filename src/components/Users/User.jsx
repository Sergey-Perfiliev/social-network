import React from 'react'
import s from './users.module.css'
import userPhoto from '../../assets/userPhoto.jpg'
import { NavLink } from 'react-router-dom'


let User = ({ user, unfollow, follow, followingInProgress }) => {
	return <div className={s.userWrapper}>
		<NavLink to={'/profile/' + user.id}>
			<img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.userPhoto} />
		</NavLink>
		<div>
			<h3>{user.name}</h3>
			{user.followed ?
				<button disabled={followingInProgress.some(id => id === user.id)}
					onClick={() => { unfollow(user.id) }}>
					Unfollow
				</button> :
				<button disabled={followingInProgress.some(id => id === user.id)}
					onClick={() => { follow(user.id) }}>
					Follow
				</button>}
		</div>
	</div>
}

export default User