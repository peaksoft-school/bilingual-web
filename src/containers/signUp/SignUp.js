import React, { useState } from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as VisibilityOffIcon } from '../../assets/icons/x-1.svg'
import { ReactComponent as VisibilityIcon } from '../../assets/icons/x.svg'
import { ReactComponent as LockOutlineIcon } from '../../assets/icons/key.svg'
import { ReactComponent as LoginImage } from '../../assets/icons/Group6.svg'
import classes from '../login/LoginPage.module.css'
import Input from '../../components/UI/input/index'
import Button from '../../components/UI/button/index'
import { signup } from '../../store/auth'
import { ROUTES } from '../../utils/constants/general'

export default function SignUp() {
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const [visibility, setVisibility] = useState(false)

   const togglePasswordHandler = () => {
      setVisibility((prevVisibility) => !prevVisibility)
   }

   function submitHandler(formValue) {
      dispatch(signup(formValue))
         .unwrap()
         .then(() => {
            navigate(ROUTES.LOGIN)
         })
   }

   const validationSchema = yup.object({
      fullName: yup.string('Enter your name').required('Name is required'),
      gmail: yup
         .string('Enter your email')
         .email('Enter a valid email')
         .required('Email is required'),
      password: yup
         .string('Enter your password')
         .min(5, 'Password should be of minimum 5 characters length')
         .required('Password is required'),
   })

   const formik = useFormik({
      initialValues: {
         fullName: '',
         gmail: '',
         password: '',
      },
      validationSchema,
      onSubmit: submitHandler,
   })

   const errorMessage = () => {
      const errorValidation =
         (formik.touched.gmail && formik.errors.gmail) ||
         (formik.touched.password && formik.errors.password)
      return errorValidation
   }

   return (
      <div className={classes.container}>
         <div className={classes.leftSide}>
            <LoginImage />
         </div>
         <div className={classes.rightSide}>
            <div className={classes.form_container}>
               <form onSubmit={formik.handleSubmit}>
                  <LockOutlineIcon />
                  <h2>Create an Account</h2>
                  <Input
                     label="FullName"
                     variant="outlined"
                     fullWidth
                     id="fullName"
                     sx={{ mb: 3 }}
                     value={formik.values.fullName}
                     onChange={formik.handleChange}
                     error={
                        formik.touched.fullName &&
                        Boolean(formik.errors.fullName)
                     }
                  />
                  <Input
                     label="Email"
                     variant="outlined"
                     fullWidth
                     id="gmail"
                     sx={{ mb: 3 }}
                     value={formik.values.gmail}
                     onChange={formik.handleChange}
                     error={
                        formik.touched.gmail && Boolean(formik.errors.gmail)
                     }
                  />
                  <Input
                     id="password"
                     label="Password"
                     type={visibility ? 'text' : 'password'}
                     variant="outlined"
                     fullWidth
                     value={formik.values.password}
                     onChange={formik.handleChange}
                     error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                     }
                     InputProps={{
                        endAdornment: (
                           <button
                              className={classes.btn}
                              type="button"
                              onClick={togglePasswordHandler}
                           >
                              {visibility ? (
                                 <VisibilityIcon />
                              ) : (
                                 <VisibilityOffIcon />
                              )}
                           </button>
                        ),
                     }}
                  />
                  <p>{errorMessage()}</p>
                  <Button
                     type="submit"
                     variant="contained"
                     color="primary"
                     fullWidth
                     sx={{ mt: 3 }}
                  >
                     SIGN UP
                  </Button>
               </form>
            </div>
         </div>
      </div>
   )
}
