import React from 'react'
import { Field } from 'redux-form'
import { Input } from '../../Common/FormsControls/FormsControls'
import { required, maxLengthCreator } from '../../../utils/validators/validator'
import { reduxForm } from 'redux-form'
import s from '../Dialogs.module.css'


const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className={s.AddMessageForm}>
			<Field component={Input}
				validate={[required, maxLength50]}
				name="newMessageBody"
				placeholder="enter a message"
				type="text" />
			<button>Send</button>
		</form>
	)
}

export default reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm)