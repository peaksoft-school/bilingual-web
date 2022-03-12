import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../../components/UI/button/index'
import LayoutTest from '../../../layout/clientLayout/testLayout/LayoutTest'

function UserSelectRealEnglishWords() {
   const [select, setSelect] = useState([])

   const onSelectHandler = (id) => {
      const updates = select.map((item) => {
         if (item.id === id) {
            return { ...item, isActive: !item.isActive }
         }
         return item
      })
      setSelect([...updates])
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
            <Div>
               {select.map((item) => {
                  return (
                     <InnerDiv
                        key={item.id}
                        onClick={() => onSelectHandler(item.id)}
                        style={{ background: item.isActive ? '#3a10e5' : '' }}
                     >
                        <P style={{ color: item.isActive ? '#FEFEFF' : '' }}>
                           {item.text}
                        </P>
                     </InnerDiv>
                  )
               })}
            </Div>
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

export default UserSelectRealEnglishWords

const Div = styled.span`
   display: flex;
   flex-wrap: wrap;
   margin-top: 50px;
`

const InnerDiv = styled.div`
   min-width: 50px;
   margin-left: 10px;
   margin-bottom: 10px;
   display: flex;
   justify-content: center;
   align-items: center;
   height: 40px;
   border: 2px solid #d4d0d0;
   border-radius: 8px;
   &:hover {
      border-color: #3a10e5;
   }
`

const P = styled.p`
   margin-left: 10px;
   margin-right: 10px;
   padding: 0;
   font-family: 'DINNextRoundedLTW01';
   font-size: 18px;
   color: #4c4859;
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
