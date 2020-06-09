import React from 'react'
import s from'./Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = (props) => {

    return (
        <header className={s.header}>
            <img src='https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/73/00/4c/73004c31-75c9-a49b-2a40-e40b7894b3ec/source/512x512bb.jpg'></img>
            <div className={s.loginBlock}>
                {props.isAuth ? 
                    <div>{props.login} - <button onClick={props.logout}>logout</button></div> :
                    <NavLink to={'/login'}>Login</NavLink> 
                }
            </div>
        </header>
    )
}

export default Header