import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik' //Formik allows for easy creation of forms and fields in the front end and removes the requirement to set states in React
import * as Yup from 'yup' // Yup is a library that validates forms
import axios from 'axios'
import { useHistory } from 'react-router-dom'

function CreatePost() {
    let history = useHistory();

    const initialValues = {
        title: "",
        post_text: "",
        username: ""
    }

    //Yup.object creates object .shape allows to shape object to form values
    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required('You must input a title'), //Can pass error messages into some functions to override base errors
        post_text: Yup.string()
            .required(),
        username: Yup.string()
            .min(3)
            .max(15)
            .required() //.string requires type to be string -- .min/.max is amount of chars
    })

    const onSubmit = (data) => {
        axios.post('http://localhost:3001/posts', data).then((response) => {
            history.push('/')
        })
    }

    return (
        <div className='createPostPage'>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className='createPostFormContainer'>

                    <ErrorMessage name='title' component='span' />
                    <Field
                        autoComplete='off'
                        className='createPostInput'
                        name='title'
                        placeholder="Ex. Title..." />

                    <ErrorMessage name='post_text' component='span' />
                    <Field
                        autoComplete='off'
                        className='createPostInput'
                        name='post_text'
                        placeholder="Ex. Text..." />

                    <ErrorMessage name='username' component='span' />
                    <Field
                        autoComplete='off'
                        className='createPostInput'
                        name='username'
                        placeholder="Ex. Username..." />

                    <button type='submit'> Create Post </button>
                </Form>
            </Formik>
        </div>
    )
}

export default CreatePost
