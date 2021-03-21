import React from 'react'
import Paginator from '../Common/Paginator/Paginator'
import User from './User'
import s from './users.module.css'


let Users = ({ totalUsersCount, pageSize, currentPage, onPageChanged, users, ...props }) => {
	return <div>
		<Paginator currentPage={currentPage}
			onPageChanged={onPageChanged}
			totalItemsCount={totalUsersCount}
			pageSize={pageSize} 
			className={s.Paginator} />
		<div className={s.Users}>
			{
				users.map(u => <User user={u}
					followingInProgress={props.followingInProgress}
					unfollow={props.unfollow}
					follow={props.follow}
					key={u.id} />
				)
			}
		</div>
	</div>
}

export default Users