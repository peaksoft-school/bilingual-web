import { CircularProgress, ThemeProvider } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Routes from './routes/Routes'
import { authActions } from './store'
import { getFromLocalStorage } from './utils/helpers/localstorege/localStorege'
import { theme } from './assets/styles/themeStyle/theme'
import { BILINGUAL_TOKEN, BILINGUAL_USER } from './utils/constants/general'
import AddQuestionTypePage from './containers/admin/test/selectRealEnglishWords/questionType'

function App() {
   const dispatch = useDispatch()
   const [isLoading, setIsLoading] = useState(true)

   const autoLogin = () => {
      const token = getFromLocalStorage(BILINGUAL_TOKEN)
      const user = getFromLocalStorage(BILINGUAL_USER)
      if (token && user) {
         dispatch(authActions.autoLogin({ token, user }))
      }
      setIsLoading(false)
   }

   useEffect(() => {
      autoLogin()
   }, [])

   if (isLoading) {
      return <CircularProgress />
   }

   return (
      <ThemeProvider theme={theme}>
         {/* <Routes /> */}
         <AddQuestionTypePage />
      </ThemeProvider>
   )
}

export default App
