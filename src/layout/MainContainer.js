import styled from 'styled-components'
import Header from './adminHeader/index'

const Container = styled.div`
   width: 1140px;
   margin-left: auto;
   margin-right: auto;
`

const MainContainer = ({ children }) => {
   return (
      <>
         <Header />
         <Container>{children}</Container>
      </>
   )
}
export default MainContainer
