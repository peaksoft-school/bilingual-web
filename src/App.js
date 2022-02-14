import { ThemeProvider } from '@mui/material'
import { theme } from './assets/styles/themeStyleButton/index'
import Header from './layout/adminHeader'

function App() {
   return (
      <ThemeProvider theme={theme}>
         <Header />
      </ThemeProvider>
   )
}

export default App
