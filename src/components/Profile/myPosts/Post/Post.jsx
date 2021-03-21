import React from 'react'
import s from './Post.module.css'
import userPhoto from '../../../../assets/userPhoto.jpg'

const Post = (props) => {

	return (
		props.profile && <div className={s.item}>
			<div className={s.PostInfo}>
				<img src={props.profile ? props.profile.photos.small : userPhoto} 
					alt=""
					className={s.PostPhoto} />
				<div className={s.PostInfoName}>
					{props.profile.fullName}
					<div>date</div>
				</div>
			</div>
			<div className={s.PostMessage}>{props.message}</div>
			<div className={s.Likes}><span>Likes</span> {props.likesCount}</div>
		</div>
	)
}

export default Post