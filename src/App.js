import { ThemeProvider } from '@mui/material'
import { theme } from './assets/styles/themeStyleButton/index'
import RadioButton from './components/UI/radioButton'

function App() {
   const myFunction = () => {
      alert('Hello! I am an alert box!')
   }
   return (
      <div>
         <ThemeProvider theme={theme}>
            <div>
               <div>
                  guestions1
                  <RadioButton onChange={myFunction} />
               </div>
            </div>
         </ThemeProvider>
      </div>
   )
}

export default App
