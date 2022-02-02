import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from '../containers/login/LoginPage'
import SignUp from '../containers/login/SignUp'

export default function Index() {
   return (
      <Routes>
         <Route path="/" element={<Navigate replace to="/login" />} />
         <Route path="/login" element={<LoginPage />} />
         <Route path="/sign-up" element={<SignUp />} />
      </Routes>
   )
}
