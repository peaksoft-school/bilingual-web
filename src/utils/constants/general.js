export const ROLES = {
   ROLE_ADMIN: 'ROLE_ADMIN',
   ROLE_USER: 'ROLE_USER',
}

export const ROUTES = {
   LOGIN: '/login',
   SIGNUP: '/sign-up',
   USER: '/user/tests',
   ADMIN_TEST: '/admin/test',
   SUBMITED_RESULTS: '/admin/submited-results',
   SELECT_REAL_ENGLISH_WORDS: 'admin/test/select-real-english-words',
   ADD_TEST_PAGE: '/admin/test/addTestPage',
   ADD_QUESTION_PAGE: '/admin/test/addQuestionPage',
   QUESTION_TYPE: '/admin/test/questionType',
   TESTBYID: '/admin/test/addTestPage/:testById',
   HOME_PAGE: '/user/home-page',
   HOME_PAGE_TWO: '/user/home-page-two/test',
   HOME_PAGE_TWO_TESTBYID: '/user/home-page-two/test/:testById',
   CHECKING_YOUR_DEVICE:
      '/user/home-page-two/test/:testById/checking-your-device',
   TEST_QUESTIONBYID:
      '/user/home-page-two/test/:testById/question/:questionById',
   USER_SELECT_REAL_ENGLISH_WORDS: 'user/select-real-english-words',
}

export const BILINGUAL_TOKEN = 'BILINGUAL_TOKEN'
export const BILINGUAL_USER = 'BILINGUAL_USER'
