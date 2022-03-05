import styled from 'styled-components'
import LinearDeterminate from './LinearDeterminate'
import { getPercent } from '../../../utils/helpers'

const CountTime = ({ time, totalTime }) => {
   const { sec, min } = time
   const timerMinutes = min < 10 ? `0${min}` : min || '00'
   const timerSeconds = sec < 10 ? `0${sec}` : sec
   const percent = getPercent(totalTime * 60 || 60, sec + min * 60)

   return (
      <div>
         {/* <div>{timerSeconds}</div> */}
         <H2time>
            {timerMinutes}:{timerSeconds}
         </H2time>
         <LinearDeterminate percent={percent} />
      </div>
   )
}
export default CountTime
const H2time = styled('h2')`
   color: #4c4859;
`
