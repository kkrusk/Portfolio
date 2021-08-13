import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik' //Formik allows for easy creation of forms and fields in the front end and removes the requirement to set states in React
import * as Yup from 'yup' // Yup is a library that validates forms
import axios from "axios"

function Register() {
    const initialValues = {
        username: "",
        password: "",
    }

    //Yup.object creates object .shape allows to shape object to form values
    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .min(3, "Username must be at least 3 characters long")
            .max(15, "Username must be at most 15 characters long")
            .required("Username is required"),
        password: Yup.string()
            .min(3, "Password must be at least 3 characters long")
            .max(15, "Password must be at most 20 characters long")
            .required("Password is required"),
    })

    const onSubmit = (data) => {
        axios.post('http://localhost:3001/auth/register', data).then((response) => {
            console.log(data)
        })
    }

    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className='formContainer'>

                    <label>Username:</label>
                    <ErrorMessage name='username' component='span' />
                    <Field
                        autoComplete='off'
                        id='inputCreateUser'
                        name='username'
                        placeholder="Ex. Username..." />

                    <label>Password:</label>
                    <ErrorMessage name='password' component='span' />
                    <Field
                        type='password'
                        autoComplete='off'
                        id='inputCreateUser'
                        name='password'
                        placeholder="Ex. Password..." />

                    <button type='submit'> Register </button>
                </Form>
            </Formik>
        </div>
    )
}

export default Register
