/* eslint-disable no-plusplus */
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, Navigate, Route, Routes } from 'react-router-dom'
import SubmittedResultsPage from '../containers/admin/evaluate/submittedResults/SubmittedResultsPage'
import EvaluatingSubmittedResultsPage from '../containers/admin/evaluate/evaluatingSubmittedResultspage/EvaluatingSubmittedResultsPage'
import AddQuestionTypePage from '../containers/admin/question/questionType/questionType'
import AddNewTest from '../containers/admin/tests/addnewTestPage/AddNewTestPage'
import TestPage from '../containers/admin/tests/testPage/TestPage'
import CheckingYourDevice from '../containers/client/checkingYourDevice/CheckingYourDevice'
import HomePage from '../containers/client/homepage/HomePage'
import StartPracticeTest from '../containers/client/startPracticeTest/StartPracticeTest'
import UserRespondInAtLeastNWords from '../containers/client/userRespondInAtLeastNWords/UserRespondInAtLeastNWords'
import LoginPage from '../containers/login/LoginPage'
import SignUp from '../containers/signUp/SignUp'
import { ROLES, ROUTES } from '../utils/constants/general'
import PrivateRoute from './private/PrivateRoute'
import QuestionType from '../containers/admin/evaluate/questionType/QuestionType'

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
            path={ROUTES.QUESTIONBYID}
            element={
               <PrivateRoute
                  Component={<AddQuestionTypePage />}
                  roles={[ROLES.ROLE_ADMIN]}
               />
            }
         />
         <Route
            path={ROUTES.NEWTESTBYID}
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
            path={ROUTES.EVALUATE_QUESTIONS}
            element={
               <PrivateRoute
                  Component={<EvaluatingSubmittedResultsPage />}
                  roles={[ROLES.ROLE_ADMIN]}
               />
            }
         />
         <Route
            path={ROUTES.EVALUATE_QUESTION_BY_ID}
            element={
               <PrivateRoute
                  Component={<EvaluatingSubmittedResultsPage />}
                  roles={[ROLES.ROLE_ADMIN]}
               />
            }
         />
         <Route
            path={ROUTES.EVALUATE_QUESTION_TYPE}
            element={
               <PrivateRoute
                  Component={<QuestionType />}
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
            path={ROUTES.START_PRACTICE_TEST_TEST_BY_ID}
            element={
               <PrivateRoute
                  Component={<StartPracticeTest />}
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
            path={ROUTES.USER_RESPOND_IN_AT_LEAST_N_WORDS}
            element={
               <PrivateRoute
                  Component={<UserRespondInAtLeastNWords />}
                  roles={[ROLES.ROLE_USER]}
               />
            }
         />
      </Routes>
   )
}
