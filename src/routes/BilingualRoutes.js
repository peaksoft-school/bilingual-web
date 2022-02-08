import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from '../containers/login/LoginPage'
import SignUp from '../containers/login/SignUp'
import { ROUTES } from '../utils/constants/general'

export default function BilingualRoutes() {
   const navigate = useNavigate()
   const isAuthorized = useSelector((state) => state.auth.isAuthorized)
   useEffect(() => {
      if (!isAuthorized) {
         navigate(ROUTES.LOGIN)
      }
   }, [isAuthorized])

   return (
      <Routes>
         <Route path="/" element={<Navigate replace to={ROUTES.LOGIN} />} />
         <Route path={ROUTES.LOGIN} element={<LoginPage />} />
         <Route path={ROUTES.SIGNUP} element={<SignUp />} />
         <Route path={ROUTES.ADMIN} element={<h1>Admin test page</h1>} />
         <Route path={ROUTES.USER} element={<h1>User test page</h1>} />
      </Routes>
   )
}
