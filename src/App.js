import { ThemeProvider } from '@mui/material'
import { theme } from './assets/styles/themeStyleButton/index'
import AddNewTest from './components/pages/admin/testChapter/addNewTest'

function App() {
   return (
      <ThemeProvider theme={theme}>
         <AddNewTest />
      </ThemeProvider>
   )
}

export default App
