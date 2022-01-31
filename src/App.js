import { useState } from 'react'
import Checkbox from './components/UI/checkbox'

function App() {
   const [valu, setCheckbo] = useState(false)
   return (
      <div>
         <Checkbox
            label="1 вопрос"
            value={valu}
            checked={valu}
            onChange={() => setCheckbo(!valu)}
         />
      </div>
   )
}

export default App
