/* eslint-disable no-plusplus */
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, Navigate, Route, Routes } from 'react-router-dom'
import SubmittedResultsPage from '../containers/admin/evaluate/submittedResults/SubmittedResultsPage'
import AddQuestionTypePage from '../containers/admin/question/questionType/questionType'
import AddNewTest from '../containers/admin/tests/addnewTestPage/AddNewTestPage'
import TestPage from '../containers/admin/tests/testPage/TestPage'
import CheckingYourDevice from '../containers/client/checkingYourDevice/CheckingYourDevice'
import HomePage from '../containers/client/homepage/HomePage'
import HomePageTwo from '../containers/client/homePage2/HomePageTwo'
import UserRespondInAtLeastNWords from '../containers/client/userRespondInAtLeastNWords/UserRespondInAtLeastNWords'
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
            path={ROUTES.ADD_TEST_PAGE}
            element={
               <PrivateRoute
                  Component={<AddNewTest />}
                  roles={[ROLES.ROLE_ADMIN]}
               />
            }
         />
         <Route
            path={ROUTES.TESTBYID}
            element={
               <PrivateRoute
                  Component={<AddNewTest />}
                  roles={[ROLES.ROLE_ADMIN]}
               />
            }
         />

         <Route
            path={ROUTES.QUESTION_TYPE}
            element={
               <PrivateRoute
                  Component={<AddQuestionTypePage />}
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
                  Component={<HomePage />}
                  roles={[ROLES.ROLE_USER]}
               />
            }
         />
         <Route
            path={ROUTES.HOME_PAGE_TWO}
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
            path={ROUTES.USER_RESPOND_IN_AT_LEAST_WORDS}
            element={
               <PrivateRoute
                  Component={<UserRespondInAtLeastNWords />}
                  roles={[ROLES.ROLE_USER]}
               />
            }
         />
         {/* <Route
            path={ROUTES.USER_RECORD_SAYING_STATEMENT}
            element={
               <PrivateRoute
                  Component={<UserRecordSayingStatement />}
                  roles={[ROLES.ROLE_USER]}
               />
            }
         /> */}
      </Routes>
   )
}
