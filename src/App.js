import { useState } from 'react'
import './App.css'
import ReusableSwitch from './components/UI/switchButton'

function App() {
   const [value, setValue] = useState(false)
   const [on, setOn] = useState(false)

   const changeHandlerFirst = () => {
      setValue(!value)
   }

   const changeHandlerSecond = () => {
      setOn(!on)
   }

   const submitHandler = (e) => {
      e.preventDefault(e)
   }

   return (
      <form onSubmit={submitHandler}>
         <div>
            <ReusableSwitch checked={value} onChange={changeHandlerFirst} />
         </div>
         <div>
            <ReusableSwitch checked={on} onChange={changeHandlerSecond} />
         </div>
      </form>
   )
}

export default App
