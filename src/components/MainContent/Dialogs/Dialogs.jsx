import React from 'react'
import {Route, Routes} from 'react-router-dom'
import classes from './Dialogs.module.css'
import DialogsList from "./DialogsList/DialogsList";
import Separator from "./Separator/Separator";
import ActiveDialog from "./ActiveDialog/ActiveDialog";
import {dialogsData} from "../../../data/dialogsData";

const routeElements = dialogsData.map(el => {
    return <Route
        path={el.id}
        element={
            <ActiveDialog
                name={el.name}
                avaURL={el.avaURL}
                incom={el.incomingMessages}
                outcom={el.outcomingMessages}
            />}
    />
})

const Dialogs = props => {
    return (
        <div className={classes.dialogs}>
            <DialogsList/>
            <Separator/>
            <Routes>
                {routeElements}
            </Routes>
        </div>
    )
}

export default Dialogs