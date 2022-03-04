import * as React from 'react'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import styled from 'styled-components'

const StyledBox = styled(Box)`
   width: 813px;
   height: 8px;
`
const StyledLinerProgress = styled(LinearProgress)`
   &.MuiLinearProgress-root {
      background: #d4d0d0;
   }
   & .MuiLinearProgress-bar1Determinate {
      background-color: #3a10e5;
   }
`
export default function LinearDeterminate({ timer }) {
   const [progress, setProgress] = React.useState(timer)
   React.useEffect(() => {
      const timer = setInterval(() => {
         setProgress((oldProgress) => {
            if (oldProgress === 100) {
               return 0
            }
            const diff = Math.random() * 10
            return Math.min(oldProgress + diff, 100)
         })
      }, 500)
      return () => {
         clearInterval(timer)
      }
   }, [])
   return (
      <StyledBox>
         <StyledLinerProgress variant="determinate" value={progress} />
      </StyledBox>
   )
}
