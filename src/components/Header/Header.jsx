import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Header = (props) => {
	return (
		<header className={s.header}>
			<div className={s.logoWrapper}>
				<img src={logo} alt="social-network" className={s.logoImg}></img>
				<h1 className={s.logo} >Social-network</h1>
			</div>
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