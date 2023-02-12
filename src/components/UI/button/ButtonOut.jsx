import React from 'react'
import classes from './button.module.css'
const ButtonOut = ({children, ...props}) => {
  return (
    <button className={classes.ButtonOut} {...props}>{children}</button>
  )
}
export default ButtonOut