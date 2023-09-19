import React from 'react'
import style from './Form.module.css'
import { useFormik } from 'formik'
import * as yup from 'yup'

const Form = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: yup.object({
            name: yup.string().min(2, "name must have at least 2 characters").required(),
            email: yup.string().email().required(),
            password: yup.string().min(6, "password must have at least 6 characters").required(),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            resetForm({ values: '' })
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={style.formGroup}>
                <label htmlFor='name'>Name: </label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
                <br />
                {formik.touched.name && formik.errors.name && <span>{formik.errors.name}</span>}

            </div>
            <div className={style.formGroup}>
                <label htmlFor='email'>Email: </label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                <br />
                {formik.touched.email && formik.errors.email && <span>{formik.errors.email}</span>}
            </div>
            <div className={style.formGroup}>
                <label htmlFor='password'>Password: </label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
                <br />
                {formik.touched.password && formik.errors.password && <span>{formik.errors.password}</span>}
            </div>
            <div className={style.formGroup}>
                <button type='submit'>Signup</button>
            </div>
        </form>
    )
}

export default Form
