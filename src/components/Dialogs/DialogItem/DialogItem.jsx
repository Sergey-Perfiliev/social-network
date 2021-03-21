import React from 'react'
import s from '../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
	return (
		<div className={s.dialog + ' ' + s.active}>
			<NavLink to={"/dialogs/" + props.id} className={s.navlink}>{props.name}</NavLink>
		</div>
	)
}

export default DialogItem