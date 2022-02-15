import styled from 'styled-components'
import Button from '../../../../components/UI/Button'
import ReCheckbox from '../../../../components/UI/checkbox'
import Input from '../../../../components/UI/input'

export const MainTitle = () => {
   return (
      <StyledDivHeader>
         <div style={{ paddingBottom: '33px' }}>
            <Title>Test Question</Title>
            <MainName>Question Titel: </MainName>
            <MainP> Select real English</MainP>
            <br />
            <MainName>Duration (in minutes):</MainName>
            <MainP> 0:30</MainP>
            <br />
            <MainName>Question Type:</MainName>
            <MainP> Select real English</MainP>
         </div>
         <div>
            <Title>Evaluation</Title>
            <Score>Score (1 - 10)</Score>
            <Input
               type="text"
               inputProps={{
                  style: {
                     height: '13px',
                     width: '66px',
                  },
               }}
            />
         </div>
      </StyledDivHeader>
   )
}

export const InputBox = () => {
   return (
      <StyledInputBox>
         <StyledInput>
            <InnerDiv>
               1 <p>champion</p>
            </InnerDiv>
            <ReCheckbox />
         </StyledInput>
         <StyledInput>
            <InnerDiv>
               2 <p>inner</p>
            </InnerDiv>
            <ReCheckbox />
         </StyledInput>
         <StyledInput>
            <InnerDiv>
               3 <p>picking</p>
            </InnerDiv>
            <ReCheckbox />
         </StyledInput>
         <StyledInput>
            <InnerDiv>
               4 <p>laeve</p>
            </InnerDiv>
            <ReCheckbox />
         </StyledInput>
         <StyledInput>
            <InnerDiv>
               5 <p>messega</p>
            </InnerDiv>
            <ReCheckbox />
         </StyledInput>
         <StyledInput>
            <InnerDiv>
               6 <p>like</p>
            </InnerDiv>
            <ReCheckbox />
         </StyledInput>
      </StyledInputBox>
   )
}

export const UserAnswers = () => {
   return (
      <FooterBox>
         <Div>
            <MainName>Users Answer</MainName>
         </Div>
         <FooterInputBox>
            <FooterInput>
               <p>listen</p>
            </FooterInput>
            <FooterInput>
               <p>messega</p>
            </FooterInput>
            <FooterInput>
               <p>like</p>
            </FooterInput>
            <FooterInput>
               <p>picking</p>
            </FooterInput>
         </FooterInputBox>
      </FooterBox>
   )
}

export const FooterButton = () => {
   return (
      <StyledDivOfModalFooter>
         <Button
            color="primary"
            variant="outlined"
            sx={{ mr: '16px', height: '42px' }}
         >
            GO BACK
         </Button>
         <Button
            type="submit"
            color="secondary"
            variant="contained"
            sx={{ mr: '16px', height: '42px' }}
         >
            SAVE
         </Button>
      </StyledDivOfModalFooter>
   )
}

const StyledDivHeader = styled.div`
   display: flex;
   justify-content: space-between;
   margin-top: 32px;
`

const StyledInputBox = styled.div`
   display: flex;
   flex-wrap: wrap;
`

const StyledInput = styled.div`
   box-sizing: border-box;
   width: 234px;
   height: 46px;
   border: 1px solid #d4d0d0;
   border-radius: 8px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding-right: 16px;
   padding-left: 16px;
   margin-bottom: 18px;
   margin-right: 18px;
`

const InnerDiv = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   & p {
      margin-left: 17px;
   }
`
const FooterInput = styled.div`
   box-sizing: border-box;
   width: 171px;
   height: 46px;
   border: 1px solid #d4d0d0;
   border-radius: 8px;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   padding-right: 16px;
   padding-left: 16px;
`
const FooterBox = styled.div`
   width: 738px;
`
const FooterInputBox = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
`
const StyledDivOfModalFooter = styled.div`
   width: 100%;
   margin-top: 32px;
   display: flex;
   justify-content: flex-end;
`
const Div = styled.div`
   margin-top: 25px;
   margin-bottom: 14px;
`
const Title = styled.h3`
   font-weight: 600;
   font-family: 'DINNextRoundedLTW01-Regular';
`

const MainName = styled.h4`
   font-weight: 600;
   margin: 10px 0 0 0;
   display: inline-block;
   font-family: 'DINNextRoundedLTW01-Regular';
`

const MainP = styled.span`
   font-weight: 500;
   font-size: 16px;
   font-family: 'DINNextRoundedLTW01-Regular';
`
const Score = styled.h4`
   font-weight: 600;
   font-family: 'DINNextRoundedLTW01-Regular';
   margin-bottom: 10px;
`
