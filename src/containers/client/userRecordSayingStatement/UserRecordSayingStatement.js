/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MicRecorder from 'mic-recorder-to-mp3'
import classes from './UserRecordSayingStatement.module.css'
import { ReactComponent as Head } from '../../../assets/icons/Head.svg'
import { ReactComponent as Ellipse } from '../../../assets/icons/Ellipse.svg'
import Button from '../../../components/UI/button/index'
import LinearDeterminate from './LinearDeterminate'
import LayoutTest from '../../../layout/clientLayout/testLayout/LayoutTest'

const Mp3Recorder = new MicRecorder({ bitRate: 128 })

function UserRecordSayingStatement() {
   const [showButton, setShowButton] = useState(true)
   const [record, setRecord] = useState({
      isRecording: false,
      blobURL: '',
      isBlocked: false,
   })

   console.log(record)

   useEffect(() => {
      navigator.getUserMedia(
         { audio: true },
         () => {
            setRecord({ isBlocked: false })
         },
         () => {
            setRecord({ isBlocked: true })
         }
      )
   }, [])

   const start = () => {
      onClickHandler()
      if (record.isBlocked) {
         console.log('Отказано в доступе')
      } else {
         Mp3Recorder.start()
            .then(() => {
               setRecord({ isRecording: true })
            })
            .catch((e) => console.error(e))
      }
   }

   const stop = () => {
      Mp3Recorder.stop()
         .getMp3()
         // eslint-disable-next-line no-unused-vars
         .then(([buffer, blob]) => {
            const blobURL = URL.createObjectURL(blob)
            setRecord({ blobURL, isRecording: false })
            const file = new File(buffer, 'me-at-thevoice.mp3', {
               type: blob.type,
               lastModified: Date.now(),
            })

            const player = new Audio(URL.createObjectURL(file))
            player.play()
            console.log('buffer:', buffer, 'blob:', blob)
         })
         .catch((e) => console.log('error:', e))
   }

   const onClickHandler = () => {
      setShowButton((prev) => !prev)
   }

   return (
      <LayoutTest>
         <div>
            <H2time>0:01</H2time>
            <LinearDeterminate timer={100} />
         </div>
         <HeaderTitle>Record yorself saying the statement below:</HeaderTitle>
         <Main>
            <Head />
            <H3>My uncle is at work.</H3>
         </Main>
         <FooterDiv>
            <audio src={record.blobURL} control="controls" />
            {showButton && (
               <ButtonDiv>
                  <Button
                     onClick={start}
                     color="primary"
                     variant="contained"
                     sx={{ width: '143px' }}
                  >
                     RECORD NOW
                  </Button>
               </ButtonDiv>
            )}
            {!showButton && (
               <ButtonShow>
                  <Div>
                     <Ellipse /> <P>RECORDING...</P>
                  </Div>
                  <div className={classes.loader}>
                     <span className={classes.stroke} />
                     <span className={classes.stroke} />
                     <span className={classes.stroke} />
                     <span className={classes.stroke} />
                     <span className={classes.stroke} />
                     <span className={classes.stroke} />
                     <span className={classes.stroke} />
                     <span className={classes.stroke} />
                     <span className={classes.stroke} />
                     <span className={classes.stroke} />
                  </div>
                  <Button
                     onClick={stop}
                     disabled={!record.isRecording}
                     color="primary"
                     variant="contained"
                     sx={{ width: '143px' }}
                  >
                     NEXT
                  </Button>
               </ButtonShow>
            )}
         </FooterDiv>
      </LayoutTest>
   )
}

export default UserRecordSayingStatement

const ButtonDiv = styled.div`
   display: flex;
   justify-content: flex-end;
`
const ButtonShow = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`
const Div = styled.div`
   display: flex;
`
const H2time = styled('h2')`
   color: #4c4859;
`
const HeaderTitle = styled.p`
   margin: 0 auto;
   margin-top: 30px;
   font-family: 'DINNextRoundedLTW01';
   font-size: 28px;
   color: #4c4859;
   display: flex;
   justify-content: center;
`
const Main = styled.div`
   margin: 0 auto;
   width: 305px;
   margin-top: 51px;
   margin-bottom: 131px;
   display: flex;
   justify-content: space-between;
   align-items: center;
`

const FooterDiv = styled.div`
   border-top: 2px solid #d4d0d0;
   padding-top: 32px;
`
const P = styled.p`
   margin: 0 auto;
   margin-left: 10px;
   font-weight: 600;
   font-family: 'DINNextRoundedLTW01';
   font-size: 16px;
   color: #3a10e5;
`

const H3 = styled.h3`
   font-family: 'DINNextRoundedLTW01-Regular';
   font-size: 18px;
   color: #4c4859;
   margin-left: 20px;
   margin-bottom: 35px;
`
