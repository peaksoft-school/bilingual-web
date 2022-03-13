import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../../components/UI/button/index'
import LayoutTest from '../../../layout/clientLayout/testLayout/LayoutTest'
import { ReactComponent as Sound } from '../../../assets/icons/volume-1.svg'
import { ReactComponent as Check } from '../../../assets/icons/check.svg'

function UserListenAndRealEnglishWords() {
   const [select, setSelect] = useState([])

   const onSelectHandler = (id) => {
      const updated = select.map((item) => {
         if (item.id === id) {
            return { ...item, isActive: !item.isActive }
         }
         return item
      })
      setSelect([...updated])
   }

   const submitBtn = (e) => {
      e.preventDefault()
      const actives = select
         .filter(({ isActive }) => isActive)
         .map(({ text }) => text)
   }
   return (
      <LayoutTest>
         <>
            <HeaderTitle>
               Select the real English words in this list
            </HeaderTitle>
            <MainDiv>
               <Div>
                  {select.map((item) => {
                     return (
                        <StyledInput
                           key={item.id}
                           style={{
                              border: item.isActive
                                 ? '2px solid #3a10e5'
                                 : '2px solid #d4d0d0',
                           }}
                        >
                           <InnerDivv>
                              <Sound /> <P>{item.text}</P>
                           </InnerDivv>
                           <CheckDiv
                              onClick={() => onSelectHandler(item.id)}
                              style={{
                                 background: item.isActive ? '#3a10e5' : '',
                                 borderLeft: item.isActive
                                    ? '#3a10e5'
                                    : '2px solid #d4d0d0',
                              }}
                           >
                              <Check
                                 style={{
                                    color: item.isActive ? '#FEFEFF' : '',
                                 }}
                              />
                           </CheckDiv>
                        </StyledInput>
                     )
                  })}
               </Div>
            </MainDiv>
            <FooterDiv>
               <Button
                  color="primary"
                  variant="contained"
                  sx={{ width: '143px' }}
                  onClick={submitBtn}
               >
                  NEXT
               </Button>
            </FooterDiv>
         </>
      </LayoutTest>
   )
}

export default UserListenAndRealEnglishWords

const CheckDiv = styled.div`
   height: 42px;
   width: 47px;
   border-radius: 0 8px 8px 0;
   margin-left: 10px;
   display: flex;
   justify-content: center;
   align-items: center;
`
const InnerDivv = styled.div`
   width: 135px;
   font-family: 'DINNextRoundedLTW01-Regular';
   color: #4c4859;
   display: flex;
   align-items: center;
   & p {
      font-weight: 600;
   }
`

const StyledInput = styled.div`
   box-sizing: border-box;
   width: 192px;
   height: 42px;
   border-radius: 8px;
   display: flex;
   align-items: center;
   padding-left: 16px;
   margin-bottom: 18px;
   margin-right: 18px;
`

const MainDiv = styled.div`
   display: flex;
   justify-content: center;
`

const Div = styled.span`
   width: 730px;
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
`
const P = styled.p`
   margin-left: 15px;
`

const FooterDiv = styled.div`
   margin-top: 90px;
   border-top: 2px solid #d4d0d0;
   padding-top: 32px;
   display: flex;
   justify-content: flex-end;
`

const HeaderTitle = styled.p`
   margin: 0 auto;
   margin-top: 50px;
   margin-bottom: 50px;
   font-family: 'DINNextRoundedLTW01';
   font-size: 28px;
   color: #4c4859;
   display: flex;
   justify-content: center;
`
