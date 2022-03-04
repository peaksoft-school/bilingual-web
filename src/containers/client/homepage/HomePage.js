import { useEffect, useState } from 'react'
import { getAllTest } from '../../../api/clientService'
import Header from '../../../layout/adminHeader'
import TestItem from './TestItem'

const HomePage = () => {
   const [tests, setTests] = useState([])

   const getAllLanguagesApi = async () => {
      const requestConfig = await getAllTest()

      // setTests(requestConfig)
      setTests(requestConfig.data)
   }
   console.log(tests)

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
