import React from 'react'
import {Route, Routes} from 'react-router-dom'
import classes from './dialogs.module.css'
import DialogsList from "./dialogsList/dialogsList";
import Separator from "./separator/separator";
import ActiveDialog from "./activeDialog/activeDialog";
import {dialogs} from "../../../data/dialogs";

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <DialogsList/>
            <Separator/>
            <Routes>
                {dialogs.map((item) => (
                    <Route
                        key={item.id}
                        path={item.id}
                        element={
                            <ActiveDialog
                                name={item.name}
                                friendAvatarURL={item.avatarURL}
                                messages={item.messages}
                            />
                        }
                    />
                ))}
            </Routes>
        </div>
    )
}

export default Dialogs