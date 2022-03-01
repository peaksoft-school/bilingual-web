import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, Navigate, Route, Routes } from 'react-router-dom'
import SubmittedResultsPage from '../containers/admin/evaluate/submittedResults/SubmittedResultsPage'
import TestPage from '../containers/admin/tests/testPage/TestPage'
// import TestPaage from '../containers/admin/tests/testPage/TestPage'
import LoginPage from '../containers/login/LoginPage'
import SignUp from '../containers/signUp/SignUp'
import { ROLES, ROUTES } from '../utils/constants/general'
import PrivateRoute from './private/PrivateRoute'

export default function AllRoutes() {
   const navigate = useNavigate()
   const isAuthorized = useSelector((state) => state.auth.isAuthorized)
   useEffect(() => {
      if (!isAuthorized) {
         navigate(ROUTES.LOGIN)
      }
   }, [isAuthorized])

   // create test id=12342134

   // tests [1233]

   // [{id: 12423}]

   // axios.put('baseURL' + id, {changesTet})

   return (
      <Routes>
         <Route path="/" element={<Navigate replace to={ROUTES.LOGIN} />} />
         <Route path="*" element={<Navigate replace to={ROUTES.LOGIN} />} />
         <Route path={ROUTES.LOGIN} element={<LoginPage />} />
         <Route path={ROUTES.SIGNUP} element={<SignUp />} />
         <Route
            path={ROUTES.ADMIN_TEST}
            element={
               <PrivateRoute
                  Component={<TestPage />}
                  roles={[ROLES.ROLE_ADMIN]}
               />
            }
         />
         <Route
            path={ROUTES.SUBMITED_RESULTS}
            element={
               <PrivateRoute
                  Component={<SubmittedResultsPage />}
                  roles={[ROLES.ROLE_ADMIN]}
               />
            }
         />
         <Route
            path={ROUTES.USER}
            element={
               <PrivateRoute
                  Component={<h1>User test page</h1>}
                  roles={[ROLES.ROLE_USER]}
               />
            }
         />
      </Routes>
   )
}
