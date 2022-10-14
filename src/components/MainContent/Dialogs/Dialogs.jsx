import React from 'react'
import {Route, Routes} from 'react-router-dom'
import classes from './dialogs.module.css'
import DialogsList from "./dialogsList/dialogsList";
import Dialog from "./dialog/dialog";

const Dialogs = ({state}) => {
    return (
        <div className={classes.dialogs}>
            <DialogsList dialogs={state.getDialogs()}/>

            <div className={classes.separator}>
            </div>

            <Routes>
                {state.getDialogs().map((item) => (
                    <Route
                        key={item.id}
                        path={item.name}
                        element={
                            <Dialog
                                friendId={item.id}
                                friendAvatarURL={item.avatarURL}
                                messages={item.messages}
                                profileAvatarURL={state.profileAvatarURL}
                                addMessage={state.dispatch.bind(state)}
                                deleteMessage={state.dispatch.bind(state)}
                            />
                        }
                    />
                ))}
            </Routes>
        </div>
    )
}

export default Dialogs