import React from "react"
import classes from "./ActiveDialog.module.css"

const ActiveDialog = props => {
    return (
        <div className={classes.activeDialog}>
           testing {props.name}
        </div>
    )
}

export default ActiveDialog