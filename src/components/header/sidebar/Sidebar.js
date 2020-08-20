import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import EditIcon from "@material-ui/icons/Edit";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import SidebarOption from "../sidebarOption/SidebarOption";
import CommentIcon from "@material-ui/icons/Comment";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import db from "../../../firebase/firebase";
function Sidebar() {
  const [Channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <div className='sidebar__info'>
          <h2>Chat Room</h2>
          <h3>
            <FiberManualRecordIcon></FiberManualRecordIcon>
            Md. Sharif Alam
          </h3>
        </div>
        <EditIcon></EditIcon>
      </div>
      <div>
        <SidebarOption
          Icon={CommentIcon}
          title='Threads'
        ></SidebarOption>
        <SidebarOption
          Icon={MoveToInboxIcon}
          title='Mentions & reactions'
        ></SidebarOption>
        <SidebarOption
          Icon={DraftsIcon}
          title='Saved items'
        ></SidebarOption>
        <SidebarOption
          Icon={BookmarkIcon}
          title='Channel browser'
        ></SidebarOption>
        <SidebarOption
          Icon={PeopleAltIcon}
          title='People & user groups'
        ></SidebarOption>
        <SidebarOption
          Icon={AppsIcon}
          title='Apps'
        ></SidebarOption>
        <SidebarOption
          Icon={FileCopyIcon}
          title='Files browser'
        ></SidebarOption>
        <SidebarOption
          Icon={ExpandLessIcon}
          title='Show less'
        ></SidebarOption>
        <hr></hr>
        <SidebarOption
          Icon={ExpandMoreIcon}
          title='Channels'
        ></SidebarOption>
        <hr></hr>
        <SidebarOption
          Icon={AddCircleIcon}
          addChannelOption
          title='Add Channels'
        ></SidebarOption>
        {Channels.map((channel) => (
          <SidebarOption
            key={channel.id}
            id={channel.id}
            title={channel.name}
          ></SidebarOption>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
