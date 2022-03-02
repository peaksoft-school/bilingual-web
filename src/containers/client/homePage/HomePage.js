import styled from 'styled-components'
import homePage from '../../../assets/icons/homePage1.svg'
import Button from '../../../components/UI/button/index'
import LayoutClient from '../../../layout/clientLayout/layoutClient/LayoutClient'

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
   return (
      <LayoutClient>
         <Div>
            <div>
               <img src={homePage} alt="" />
            </div>
            <DivText>
               <H1minutes>15 minutes</H1minutes>
               <P1>Take a practice test </P1>
               <P2>Train as much as you like.</P2>
            </DivText>
            <DivButton>
               <Button>PRACTICE TEST</Button>
            </DivButton>
         </Div>
      </LayoutClient>
   )
}

export default HomePage
