import React, { useState, useRef } from 'react'
import { ThemeProvider } from '@mui/material'
import { useFormik } from 'formik'
// import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'
import loginImg from '../../assets/icons/Group6.svg'
import Icon from '../../assets/icons/key.svg'
import classes from './LoginPage.module.css'
import Input from '../../components/UI/input/index'
import Button from '../../components/UI/button/index'
import { theme } from '../../assets/styles/themeStyleButton/index'

export default function SignUp() {
   // const dispatch = useDispatch()
   const nameInputRef = useRef()
   const emailInputRef = useRef()
   const passwordInputRef = useRef()
   const [visibility, setVisibility] = useState(false)

   const togglePasswordHandler = () => {
      setVisibility((prevVisibility) => !prevVisibility)
   }

   const validationSchema = yup.object({
      email: yup
         .string('Enter your email')
         .email('Enter a valid email')
         .required('Email is required'),
      password: yup
         .string('Enter your password')
         .min(5, 'Password should be of minimum 5 characters length')
         .required('Password is required'),
   })

   function submitchik(formValue) {
      console.log(formValue)
      const enteredName = nameInputRef.current.value
      const enteredEmail = emailInputRef.current.value
      const enteredPassword = passwordInputRef.current.value
   }

   const formik = useFormik({
      initialValues: {
         email: '',
         password: '',
      },
      validationSchema,
      onSubmit: submitchik,
   })

   const errorValidation =
      (formik.touched.password && formik.errors.password) ||
      (formik.touched.email && formik.errors.email)

   return (
      <ThemeProvider theme={theme}>
         <div className={classes.container}>
            <div className={classes.leftSide}>
               <img
                  className={classes.loginImg}
                  src={loginImg}
                  alt="loginImage"
               />
            </div>
            <div className={classes.rightSide}>
               <div className={classes.form_container}>
                  <form onSubmit={formik.handleSubmit}>
                     <img className={classes.icon} src={Icon} alt="Icon" />
                     <h2>Create an Account</h2>
                     <Input
                        ref={nameInputRef}
                        label="Name"
                        variant="outlined"
                        fullWidth
                        sx={{ mb: 3 }}
                     />
                     <Input
                        ref={emailInputRef}
                        label="Email"
                        variant="outlined"
                        fullWidth
                        id="email"
                        sx={{ mb: 3 }}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                     />
                     <Input
                        ref={passwordInputRef}
                        id="password"
                        label="Password"
                        type={visibility ? 'text' : 'password'}
                        variant="outlined"
                        fullWidth
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        InputProps={{
                           endAdornment: (
                              <Button
                                 sx={{ border: 'none' }}
                                 onClick={togglePasswordHandler}
                              >
                                 {visibility ? (
                                    <VisibilityIcon />
                                 ) : (
                                    <VisibilityOffIcon />
                                 )}
                              </Button>
                           ),
                        }}
                     />
                     <p>{errorValidation}</p>
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
      </ThemeProvider>
   )
}
