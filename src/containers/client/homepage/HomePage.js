import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import homePage from '../../../assets/icons/homePage1.svg'
import Button from '../../../components/UI/button/index'
import Header from '../../../layout/adminHeader'
import LayoutClientHomePage from '../../../layout/clientLayout/layoutClient/layoutClientHomePage'
import { ROUTES } from '../../../utils/constants/general'

const Div = styled('div')`
   display: flex;
   justify-content: space-between;
   align-items: center;
`
const H1minutes = styled('h1')`
   font-size: 15px;
   line-height: 18px;
   color: #3a10e5;
`
const P1 = styled('p')`
   font-size: 26px;
   line-height: 29px;
   text-transform: capitalize;
   color: #4c4859;
`
const P2 = styled('p')`
   color: #4c4859;
`
const DivText = styled('div')`
   position: relative;
   right: 150px;
`
const DivButton = styled('div')`
   position: relative;
   top: 40px;
`
const HomePage = () => {
   const navigate = useNavigate()
   const [tests, setTests] = useState([{}])
   const onClicktoPractice = () => {
      navigate(ROUTES.HOME_PAGE_TWO)
   }
   return (
      <>
         <Header />
         <ul>
            {tests.map((test) => {
               return (
                  <LayoutClientHomePage key={test}>
                     <Div>
                        <div>
                           <img src={homePage} alt="" />
                        </div>
                        <DivText>
                           <H1minutes>{test.duration}</H1minutes>
                           <P1>{test.title} </P1>
                           <P2>{test.shortDescription}</P2>
                        </DivText>
                        <DivButton>
                           <Button onClick={onClicktoPractice}>
                              PRACTICE TEST
                           </Button>
                        </DivButton>
                     </Div>
                  </LayoutClientHomePage>
               )
            })}
         </ul>
      </>
   )
}
export default HomePage
