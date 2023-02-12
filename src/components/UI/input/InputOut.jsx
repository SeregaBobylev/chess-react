import React from 'react'
import classes from './InputOut.module.css'
const InputOut = (props)=>{
    return(
        <input  {...props} className={classes.InputOut} />
    )
}
export default InputOut;