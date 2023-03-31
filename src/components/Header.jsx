import React from 'react'
import "../css/header.css";
import Headeroption from './Headeroption';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux/es/exports';
import AppsIcon from '@mui/icons-material/Apps';
import { selectUser } from '../features/userSlice';

function Header() {

    const user = useSelector(selectUser);
    return (
        <div className='header'>
            <div className='header_left'>
                <div className='header_logo'>
                    <img src='https://cdn-icons-png.flaticon.com/512/3536/3536505.png' alt='logo'></img>
                </div>
                <div className='header_search'>
                    <SearchIcon />
                    <input type="text" placeholder="search" />
                </div>
            </div>


            <div className='header_right'>
                <Headeroption Icon={HomeIcon} title="Home" />
                <Headeroption Icon={PeopleIcon} title="My Network" />
                <Headeroption Icon={WorkIcon} title="Jobs" />
                <Headeroption Icon={MessageIcon} title="Messaging" />
                <Headeroption Icon={NotificationsIcon} title="Notifications" />
                <Headeroption avatar={<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />} title={user.displayName} />
                <Headeroption Icon={AppsIcon} title="Work" />
            </div>
        </div>
    )
}

export default Header
