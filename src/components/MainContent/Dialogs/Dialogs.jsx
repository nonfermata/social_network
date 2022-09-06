import React from 'react'
import { Route, Routes } from 'react-router-dom'
import classes from './dialogs.module.css'
import DialogsList from "./dialogsList/dialogsList";
import Separator from "./separator/separator";
import ActiveDialog from "./activeDialog/activeDialog";
import { dialogsData } from "../../../data/dialogsData";

const routeElements = dialogsData.map(el => {
    return <Route
        key={el.id}
        path={el.id}
        element={
            <ActiveDialog
                name={el.name}
                avaURL={el.avaURL}
                messages={el.messages}
            />}
    />
})

const Dialogs = props => {
    return (
        <div className={classes.dialogs}>
            <DialogsList />
            <Separator />
            <Routes>
                {routeElements}
            </Routes>
        </div>
    )
}

export default Dialogs