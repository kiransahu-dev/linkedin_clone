import React from 'react'
import "../css/sidebar.css";
import { Avatar, Icon } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
// import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
function Sidebar() {
    const user = useSelector(selectUser)
    return (
        <div className='sidebar'>
            <div className='sidebar_prof'>
                <img src='https://w0.peakpx.com/wallpaper/146/911/HD-wallpaper-blue-abstract-waves-creative-blue-wavy-background-blue-backgrounds-abstract-waves-waves-textures.jpg' />

                <div className='prof_detail'>
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                    <p>MERN Developer</p>
                </div>

                <div className='profile_stats'>
                    <span className='view'>Who's viewed your profile</span>
                    <span className='stat_num'> 20 </span>
                </div>
                <div className='profile_stats'>
                    <span>Connection <br /><b>Grow your Network</b></span>
                    <span className='stat_num'> 150 </span>
                </div>

            </div>
            <div className='sidebar_rec'>
                <p>Recent</p>
                <p className='hash'><span>#</span> branding</p>
                <p className='hash'><span>#</span> marketinging</p>
                <p className='hash'><span>#</span> developement</p>
                <p className='hash'><span>#</span> programming</p>
                <p className='hash'><span>#</span> react</p>
                <p className='hash'><span>#</span> reduxtoolkit</p>
            </div>
        </div>
    )
}

export default Sidebar;
