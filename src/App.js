import { CircularProgress, ThemeProvider } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from './store'
import { getFromLocalStorage } from './utils/helpers/localstorege/localStorege'
import { theme } from './assets/styles/themeStyle/theme'
import { BILINGUAL_TOKEN, BILINGUAL_USER } from './utils/constants/general'
import PrintHear from './containers/admin/testPages/printHear'

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
         <PrintHear />
      </ThemeProvider>
   )
}

export default App
