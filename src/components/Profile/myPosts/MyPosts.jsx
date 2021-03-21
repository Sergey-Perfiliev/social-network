import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { reduxForm, Field } from 'redux-form'
import { required, maxLengthCreator } from '../../../utils/validators/validator'
import { Input } from '../../Common/FormsControls/FormsControls'
import userPhoto from '../../../assets/userPhoto.jpg'


const maxLengthCreator10 = maxLengthCreator(10)

let addNewPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className={s.AddNewPostForm}>
			<img src={props.profile ? props.profile.photos.small : userPhoto} className={s.profilePhoto} />
			<Field name="newPostText" component={Input}
				validate={[required, maxLengthCreator10]}
				placeholder="Whats new?"/>
			<button>Add post</button>
		</form>
	)
}

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(addNewPostForm)

const MyPosts = React.memo(props => {
	let postsElements =
		[...props.posts]
			.reverse()
			.map(p => <Post profile={props.profile} 
				message={p.message} 
				key={p.id} 
				likesCount={p.likesCount} />)

	let onAddPost = (values) => {
		props.addPost(values.newPostText)
	}

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<AddNewPostFormRedux onSubmit={onAddPost} profile={props.profile} />
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	)
})

export default MyPosts