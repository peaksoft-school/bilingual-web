import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, Navigate, Route, Routes } from 'react-router-dom'
import SubmittedResultsPage from '../containers/admin/evaluate/submittedResults/SubmittedResultsPage'
import TestPage from '../containers/admin/tests/testPage/TestPage'
import UserRespondInAtLeastNWords from '../containers/client/userRespondInAtLeastNWords/UserRespondInAtLeastNWords'
import LoginPage from '../containers/login/LoginPage'
import SignUp from '../containers/signUp/SignUp'
import { ROLES, ROUTES } from '../utils/constants/general'
import PrivateRoute from './private/PrivateRoute'
import HomePageTwo from '../containers/client/homePage2/HomePageTwo'
import CheckingYourDevice from '../containers/client/checkingYourDevice/CheckingYourDevice'
import UserRecordSayingStatement from '../containers/client/userRecordSayingStatement/UserRecordSayingStatement'

export default function AllRoutes() {
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
            path={ROUTES.USER_HOME_PAGE_PAGE}
            element={
               <PrivateRoute
                  Component={<HomePageTwo />}
                  roles={[ROLES.ROLE_USER]}
               />
            }
         />
         <Route
            path={ROUTES.CHECKING_YOUR_DEVICE}
            element={
               <PrivateRoute
                  Component={<CheckingYourDevice />}
                  roles={[ROLES.ROLE_USER]}
               />
            }
         />
         <Route
            path={ROUTES.USER}
            element={
               <PrivateRoute
                  Component={<UserRespondInAtLeastNWords />}
                  roles={[ROLES.ROLE_USER]}
               />
            }
         />
         <Route
            path={ROUTES.USER_RECORD_SAYING_STATEMENT}
            element={
               <PrivateRoute
                  Component={<UserRecordSayingStatement />}
                  roles={[ROLES.ROLE_USER]}
               />
            }
         />
      </Routes>
   )
}
