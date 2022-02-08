import React from 'react'
import styled from 'styled-components'
import Header from '../../../../../layout/adminHeader/index'
import MainContainer from '../../../../../layout/MainContainer'
import ContentCard from '../../../../UI/adminContentCard/index'
import Button from '../../../../UI/button/index'
import ListOfTests from './ListOfTests'

const StyledUl = styled.ul`
   margin: 0;
   padding: 0;
`

const TestPage = () => {
   return (
      <div>
         <Header />
         <MainContainer>
            <ContentCard>
               <div>
                  <Button
                     color="primary"
                     variant="contained"
                     sx={{
                        p: '12px 24px 12px 16px',
                        float: 'right',
                        mb: '22px',
                        width: '164px',
                        height: '42px',
                        background: '#3A10E5',
                        boxShadow: '0px 1px 2px rgba(58, 16, 229, 0.2)',
                        borderRadius: '8px',
                        '&:hover': {
                           backgroundColor: 'rgba(58, 16, 229, 0.9)',
                        },
                        '&:active': {
                           backgroundColor: '#2800CD',
                        },
                     }}
                  >
                     + ADD NEW TEST
                  </Button>
               </div>
               <StyledUl>
                  <ListOfTests />
                  <ListOfTests />
               </StyledUl>
            </ContentCard>
         </MainContainer>
      </div>
   )
}

export default TestPage
