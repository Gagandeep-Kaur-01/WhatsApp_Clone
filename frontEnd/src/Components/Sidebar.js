import React from 'react';
import { Avatar } from "@material-ui/icons"

import './Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">

            <div className="sidebar__header">
                <Avatar />
            </div>

            <div className="sidebar__search">

            </div>

            <div className="sidebar_chats">

            </div>

        </div>
    )
}

export default Sidebar;