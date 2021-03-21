import React from 'react'
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className={s.nav}>
			<ul>
				<li className={s.list}>
					<NavLink className={s.link}
						to="/Profile" activeClassName={s.active}>Profile
                    </NavLink>
				</li>
				<li className={s.list}>
					<NavLink className={s.link}
						to="/Dialogs" activeClassName={s.active}>Messages
                    </NavLink>
				</li>
				<li className={s.list}>
					<NavLink className={s.link}
						to="/Users" activeClassName={s.active}>Users
                    </NavLink>
				</li>

				<li className={s.list}>
					<NavLink className={s.link}
						to="/News" activeClassName={s.active}>News</NavLink>
				</li>
				<li className={s.list}>
					<NavLink className={s.link}
						to="/Music" activeClassName={s.active}>Music</NavLink>
				</li>
				<li className={s.list}>
					<NavLink className={s.link}
						to="/Settings" activeClassName={s.active}>Settings</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar