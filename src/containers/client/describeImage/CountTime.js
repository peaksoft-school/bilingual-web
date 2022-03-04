import styled from 'styled-components'
import LinearDeterminate from '../../../components/UI/progressTime'
import { getPercent } from '../../../utils/helpers'

const CountTime = ({ time }) => {
   const { sec, min } = time
   const timerMinutes = min < 10 ? `0${min}` : min
   const timerSeconds = sec < 10 ? `0${sec}` : sec
   const percent = getPercent(170, sec + min * 60)
   console.log(percent)
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
