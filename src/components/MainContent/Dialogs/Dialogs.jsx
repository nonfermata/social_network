import React from 'react'
import {Route, Routes} from 'react-router-dom'
import classes from './dialogs.module.css'
import DialogsList from "./dialogsList/dialogsList";
import Dialog from "./dialog/dialog";

const Dialogs = ({dialogs, profileAvatarURL}) => {
    return (
        <div className={classes.dialogs}>
            <DialogsList dialogs={dialogs}/>

            <div className={classes.separator}>  {/* vertical separator */}
            </div>

            <Routes>
                {dialogs.map((item) => (
                    <Route
                        key={item.id}
                        path={item.name}
                        element={
                            <Dialog
                                name={item.name}
                                friendAvatarURL={item.avatarURL}
                                messages={item.messages}
                                profileAvatarURL={profileAvatarURL}
                            />
                        }
                    />
                ))}
            </Routes>
        </div>
    )
}

export default Dialogs