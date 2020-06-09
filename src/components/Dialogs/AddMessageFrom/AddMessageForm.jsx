import React from 'react'
import { Field } from 'redux-form'
import { Textarea } from '../../Common/FormsControls/FormsControls'
import { required, maxLengthCreator } from '../../../utils/validators/validator'
import { reduxForm } from 'redux-form'


const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                    validate={[required, maxLength50]}
                    name="newMessageBody" 
                    placeholder="enter a message" /> 
            </div>
            <button>Send</button>
        </form>
    )
}

export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)