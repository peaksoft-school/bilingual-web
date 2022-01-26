import React from 'react'
import classes from './Footer.module.css'
import { ReactComponent as Logo } from '../../assets/icons/logo.svg'

const Footer = () => {
   return (
      <div className={classes.footer}>
         <div className={classes.main_div}>
            <Logo className={classes.logo} />
            <div className={classes.div_of_span}>
               <span className={classes.copyright}>© 2022 Peaksoft</span>
            </div>
         </div>
      </div>
   )
}

export default Footer
