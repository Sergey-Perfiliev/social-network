import React from 'react';
import { reduxForm } from 'redux-form';
import {createField, Input, Textarea} from '../../Common/FormsControls/FormsControls'
import s from '../../Common/FormsControls/FormsControls.module.css'

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
	return <form onSubmit={handleSubmit}>
		<button>save</button>
		{error && <div className={s.formSummaryError}>
			{error}	
		</div>}
		<div>
			Fullname : {createField("Full name ", "fullName", [], Input, {type: "text"})}
		</div>
		<div>
			{createField("About me ", "aboutMe", [], Textarea)}
		</div>
		<div>
			Looking for a job:
			{createField("Looking for a job ", "lookingForAJob", [], Input, {type: "checkbox"})}
		</div>
		<div>
			{createField("My professional skills ", "lookingForAJobDescription", [], Textarea)}
		</div>
		<div>
			Contacts: {Object.keys(profile.contacts).map(key => {
			return <div key={key}>
				{key} : {createField(key, "contacts." + key, [], Input, {type: "text"})}
			</div>
		})}
		</div>
	</form>
}

const ProfileDataFormRedux = reduxForm({
	form: 'edit-profile'
})(ProfileDataForm)

export default ProfileDataFormRedux