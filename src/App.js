import { ThemeProvider } from '@mui/material'
import { theme } from './assets/styles/themeStyleButton/index'
import AddQuestionTypePage from './containers/admin/test/AddQuestionTypePage/AddQuestionTypePage'

function App() {
   return (
      <ThemeProvider theme={theme}>
         <AddQuestionTypePage />
      </ThemeProvider>
   )
}

export default App
