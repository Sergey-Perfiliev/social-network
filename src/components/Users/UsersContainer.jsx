import React from 'react'
import { connect } from 'react-redux'
import { follow, unfollow, setCurrentPage, requestUsers } from '../../redux/users-reducer'
import Users from './Users'
import Loader from '../Common/Loader'
import { compose } from 'redux'
import { getUsers, getPageSize, totalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/users-selectors'


class UsersContainer extends React.Component {
	componentDidMount() {
		const { currentPage, pageSize } = this.props
		// thunk
		this.props.requestUsers(currentPage, pageSize)
	}

	onPageChanged = (pageNumber) => {
		const { pageSize } = this.props
		this.props.requestUsers(pageNumber, pageSize)
	}

	render() {
		return <>
			{this.props.isFetching ? <Loader /> : null}
			<Users totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
				users={this.props.users}
				follow={this.props.follow}
				unfollow={this.props.unfollow}
				followingInProgress={this.props.followingInProgress} />
		</>
	}
}

let mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: totalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state)
	}
}


export default compose(
	//WithAuthRedirect,
	connect(mapStateToProps, { follow, unfollow, setCurrentPage, requestUsers })
)(UsersContainer)