import React from 'react'
import styled, { keyframes } from 'styled-components'

const Input = styled.input`
   height: 0;
   width: 0;
   opacity: 0;
   z-index: -1;
`

const Label = styled.label`
   position: relative;
   display: inline-block;
   cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
   margin: 0.6em 1em;
`

const rotate = keyframes`
 from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(50deg);
  }
`

const Indicator = styled.div`
   width: 18.49px;
   height: 18.49px;
   position: absolute;
   top: 0em;
   left: 0em;
   border: 2px solid #9a9a9a;
   border-radius: 4px;

   ${Input}:not(:disabled):checked & {
      background: #d1d1d1;
   }

   ${Label}:hover & {
      background: #ccc;
   }

   &::after {
      content: '';
      position: absolute;
      display: none;
   }

   ${Input}:checked + &::after {
      display: block;
      top: 0.1em;
      left: 0.35em;
      width: 30%;
      height: 45%;
      border: solid #ffffff;
      border-width: 0 0.2em 0.2em 0;
      animation-name: ${rotate};
      animation-duration: 0.3s;
      animation-fill-mode: forwards;
   }

   &::disabled {
      cursor: not-allowed;
   }
`

export default function Checkbox({
   value,
   checked,
   onChange,
   name,
   id,
   label,
   disabled,
}) {
   return (
      <Label htmlFor={id} disabled={disabled}>
         {label}
         <Input
            id={id}
            type="checkbox"
            name={name}
            value={value}
            disabled={disabled}
            checked={checked}
            onChange={onChange}
         />
         <Indicator />
      </Label>
   )
}
