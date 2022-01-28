import styled from 'styled-components'

const Label = styled.label`
   display: flex;
   align-items: center;
   gap: 10px;
   cursor: pointer;
`

const Switch = styled.div`
   position: relative;
   width: 39px;
   height: 22px;
   background: #b3b3b3;
   border-radius: 20px;
   padding: 4px;
   transition: 300ms all;

   &:before {
      transition: 300ms all;
      content: '';
      position: absolute;
      width: 22px;
      height: 22.6px;
      border-radius: 20px;
      top: 4.5px;
      left: 1.5px;
      background: white;
      transform: translate(1px, -1.2px);
      transition: 0.3s;
   }
`

const Input = styled.input`
   opacity: 1;
   position: absolute;

   &:checked + ${Switch} {
      background: #2ab930;

      &:before {
         transform: translate(21px, -1.2px);
      }
   }
`

const SwitchButton = ({ onChange, checked }) => {
   return (
      <Label>
         <Input type="checkbox" checked={checked} onChange={onChange} />
         <Switch />
      </Label>
   )
}

export default SwitchButton
