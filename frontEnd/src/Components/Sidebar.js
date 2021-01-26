import React, { useEffect } from 'react';
import { Avatar, IconButton } from "@material-ui/core"
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from './SidebarChat'
import db from "./firebase";

import './Sidebar.css'

function Sidebar() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    db.collection('rooms').onSnapshot(snapshot => (
      
    ))
  }, [])

    return (
        <div className="sidebar">

            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton>
                      <DonutLargeIcon />
                    </IconButton>
                    
                    <IconButton>
                      <ChatIcon />
                    </IconButton>

                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>                    
                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                  <SearchOutlined />
                  <input placeholder="Search or start new chat" type="text" />
                </div>                
            </div>

            <div className="sidebar__chats">
              {/* Hard coded */}
                <SidebarChat addNewChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />   
            </div>

        </div>
    )
}

export default Sidebar;