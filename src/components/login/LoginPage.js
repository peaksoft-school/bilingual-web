import React, { useState } from 'react'
import { ThemeProvider } from '@mui/material'
import { useFormik } from 'formik'
import * as yup from 'yup'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'
import loginImg from '../../assets/icons/Group6.svg'
import Icon from '../../assets/icons/key.svg'
import classes from './LoginPage.module.css'
import Input from '../UI/input/index'
import Button from '../UI/button/index'
import { theme } from '../../assets/styles/themeStyleButton/index'

export default function LoginPage() {
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
         .min(8, 'Password should be of minimum 8 characters length')
         .required('Password is required'),
   })

   function submitchik(formValue) {
      console.log(formValue)
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
                     <h2>Sign in</h2>
                     <Input
                        label="Email"
                        variant="outlined"
                        fullWidth
                        id="email"
                        sx={{ mb: 3 }}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                     />
                     <Input
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
                        SIGN IN
                     </Button>
                     <Button variant="outlined" color="primary" sx={{ mt: 4 }}>
                        REGISTRATION
                     </Button>
                  </form>
               </div>
            </div>
         </div>
      </ThemeProvider>
   )
}
