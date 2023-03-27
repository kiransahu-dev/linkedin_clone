import { Avatar } from '@mui/material';
import "../css/header.css";

import React from 'react'

function Headeroption({ Icon, title, avatar }) {
    return (
        <div className='head_opt'>
            {
                Icon && <Icon />
            }
            {
                avatar && <Avatar alt="Kiran Sahu" src="/static/images/avatar/Kiran.jpg]" name={avatar} />
            }

            <span>{title}</span>
        </div>
    )
}

export default Headeroption;
