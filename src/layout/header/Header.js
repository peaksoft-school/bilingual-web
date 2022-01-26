import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { ReactComponent as Logo } from '../../assets/icons/logo.svg'
import classes from './Header.module.css'
import Button from '../../components/UI/Button'
import { theme } from '../../components/UI/StyleTheme'

const Header = () => {
   return (
      <ThemeProvider theme={theme}>
         <div className={classes.header}>
            <div className={classes.main_div}>
               <div className={classes.div_of_logo}>
                  <Logo className={classes.logo} />
               </div>
               <div className={classes.div_of_buttons}>
                  <button className={classes.button} type="submit">
                     tests
                  </button>
                  <button className={classes.button} type="submit">
                     submitted results
                  </button>
                  <Button variant="outlined" color="login">
                     log out
                  </Button>
               </div>
            </div>
         </div>
      </ThemeProvider>
   )
}

export default Header
