import React from 'react'
import s from './Post.module.css'

const Post = (props) => {

    return (
        <div className={s.item}>
            <img src="https://blog.handtalk.me/wp-content/uploads/2018/07/053-imagem-post-alt.png" alt=""/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>

    )
}

export default Post