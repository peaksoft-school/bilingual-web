/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react'
import { getAllTest } from '../../../api/clientService'
import Header from '../../../layout/adminHeader'
import TestItem from './TestItem'

const HomePage = () => {
   const [tests, setTests] = useState([])

   const getAllLanguagesApi = async () => {
      const requestConfig = await getAllTest()

      setTests(requestConfig.data)
   }

   useEffect(() => getAllLanguagesApi(), [])
   return (
      <>
         <Header />
         <ul>
            {tests.map((test) => (
               <TestItem key={test.id} test={test} />
            ))}
         </ul>
      </>
   )
}
export default HomePage
