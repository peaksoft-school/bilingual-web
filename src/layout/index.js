import styled from 'styled-components'

const AppContainer = styled.div`
   width: 100%;
   display: f;
`

const MainContainer = styled.div`
   width: 1140px;
`

const Content = styled.div`
   width: 100%;
`

const AppLayout = () => {
   return (
      <AppContainer>
         <Header />

         <MainContainer>
            <Content>
               <Routes />
            </Content>
            <Footer />
         </MainContainer>
      </AppContainer>
   )
}
