import React from 'react'
import styled from 'styled-components'
import Layout from '../../../components/UI/adminContentCard'
import { ReactComponent as Try } from '../../../assets/icons/img-try.svg'
import { ReactComponent as IconOnline } from '../../../assets/icons/icon_online.svg'
import { ReactComponent as IconTime } from '../../../assets/icons/icon_time.svg'
import { ReactComponent as IcPhoto } from '../../../assets/icons/ic-photo.svg'

const HeaderTitle = styled.p`
   font-family: 'DINNextRoundedLTW01';
   font-size: 28px;
   color: #4c4859;
   display: flex;
   justify-content: center;
`
const Main = styled.div`
   margin-top: 60px;
   margin-bottom: 92px;
`

function HomePageTwo() {
   return (
      <Layout>
         <HeaderTitle>
            Take a free practice test and estimate your score
         </HeaderTitle>
         <Main>
            <Try />
            <IconOnline />
            <IconTime />
            <IcPhoto />
         </Main>
      </Layout>
   )
}

export default HomePageTwo
