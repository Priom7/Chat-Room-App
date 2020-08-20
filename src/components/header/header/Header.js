import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import HelpIcon from "@material-ui/icons/Help";
import { useStateValue } from "../../../StateProvider/StateProvider";
function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className='header'>
      <div className='header__left'>
        <Avatar
          className='header__avatar'
          alt={user?.displayName}
          src={user?.photoURL}
        ></Avatar>
        {/* <WatchLaterIcon></WatchLaterIcon> */}
      </div>
      <div className='header__search'>
        <FindInPageIcon></FindInPageIcon>
        <input placeholder='Type in to search...'></input>
      </div>
      <div className='header__right'>
        <HelpIcon></HelpIcon>
      </div>
    </div>
  );
}

export default Header;
