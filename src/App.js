import { useState } from 'react'
import './App.css'
import ReusableSwitch from './components/UI/switchButton'

function App() {
   const [value, setValue] = useState(false)
   const [on, setOn] = useState(false)

   const changeHandlerrr = () => {
      setValue(!value)
   }

   const changeHandler = () => {
      setOn(!on)
   }

   const submitHandler = (e) => {
      e.preventDefault(e)
   }

   console.log(value)
   console.log(on)
   return (
      <form onSubmit={submitHandler}>
         <div>
            <ReusableSwitch checked={value} onChange={changeHandlerrr} />
         </div>
         <div>
            <ReusableSwitch checked={on} onChange={changeHandler} />
         </div>
      </form>
   )
}

export default App
