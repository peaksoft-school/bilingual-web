import { ThemeProvider } from 'styled-components'
import { theme } from './assets/themeButton/StylesButton'
import './App.css'

function App() {
   return <ThemeProvider theme={theme}>t</ThemeProvider>
}

export default App
