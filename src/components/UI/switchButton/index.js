import classes from './Switch.module.css'

export default function ReusableSwitch({ onChange, checked }) {
   return (
      <div className={classes.center}>
         <input type="checkbox" name="" onChange={onChange} checked={checked} />
      </div>
   )
}
