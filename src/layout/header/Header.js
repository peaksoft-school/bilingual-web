import React from 'react'
import logo from '../../assets/icons/logo.svg'
import classes from './Header.module.css'
import Button from '../../components/UI/button/Button'

const Header = () => {
   return (
      <div className={classes.header}>
         <div className={classes.main_div}>
            <div className={classes.div_of_logo}>
               <img src={logo} alt="logo" className={classes.logo} />
            </div>
            <div className={classes.div_of_buttons}>
               <button className={classes.button} type="submit">
                  tests
               </button>
               <button className={classes.button} type="submit">
                  submitted results
               </button>
               <Button variant="outlined" color="login" line="bold">
                  log out
               </Button>
            </div>
         </div>
      </div>
   )
}

export default Header
