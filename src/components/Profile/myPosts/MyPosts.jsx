import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { reduxForm, Field } from 'redux-form'
import { required, maxLengthCreator } from '../../../utils/validators/validator'
import { Textarea } from '../../Common/FormsControls/FormsControls'


const maxLengthCreator10 = maxLengthCreator(10)

let addNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea} 
                    validate={[required, maxLengthCreator10]} 
                    placeholder="Whats new?" />
            </div>
            <div>
                <button>Add post</button>
            </div>         
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(addNewPostForm)

const MyPosts = React.memo(props => {    
    let postsElements = 
        [...props.posts]
            .reverse()
            .map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef()

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (        
        <div className={s.postsBlock}>
            <div>
                <h3>My post</h3> 
                <AddNewPostFormRedux onSubmit={onAddPost} />
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
})

export default MyPosts