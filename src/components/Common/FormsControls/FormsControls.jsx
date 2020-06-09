import React from 'react'
import s from './FormsControls.module.css'
import { Field } from "redux-form"


const FormControl = ({input, meta: {error, touched}, children}) => {
    const isError = error && touched
    return (
        <div className={s.formControl + " " + (isError ? s.error : "")}>
            {children}
            { isError && <span>{error}</span> }
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta,child, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta,child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const createField = (placeholder, name, validators, component,props={}, text="") => (
    <div>
        <Field placeholder={placeholder} 
            name={name} 
            validate={validators}
            component={component} 
            {...props}
        /> {text}
    </div>
)