import { useState } from 'react'
import Header from '../../../layout/adminHeader'
import TestItem from './TestItem'

const HomePage = () => {
   const [tests, setTests] = useState([{}])
   console.log(setTests)
   return (
      <>
         <Header />
         <ul>
            {tests.map((test) => {
               return <TestItem key={test} test={test} />
            })}
         </ul>
      </>
   )
}
export default HomePage
