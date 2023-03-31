import { Avatar } from '@mui/material';
import "../css/header.css";
import firebase from 'firebase/compat/app';
import React from 'react'
import { useSelector } from 'react-redux/es/exports';
import { selectUser } from '../features/userSlice';

function Headeroption({ Icon, title, avatar }) {

    const user = useSelector(selectUser);
    return (
        <div className='head_opt'>
            {
                Icon && <Icon />
            }
            {
                avatar && <Avatar alt="Kiran Sahu" src={user.photoURL} name={avatar} onClick={e => firebase.auth().signOut()} />
            }

            <span>{title}</span>
        </div>
    )
}

export default Headeroption;
