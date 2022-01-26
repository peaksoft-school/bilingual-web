/* eslint-disable react/destructuring-assignment */
import React from 'react'
import classes from './Card.module.css'

const Card = (props) => {
   return (
      <div className={classes.div_of_card}>
         <div className={classes.card}>{props.children}</div>
      </div>
   )
}

export default Card
