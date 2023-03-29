import React from 'react';
import { Avatar } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import "../css/post.css";

function Post({ name, description, message, photoURL }) {
    return (
        <div className='posts'>
            <div className="post_header">
                <div className="header_left">
                    <Avatar src={photoURL} />
                    <div className="prof_details">
                        <h3>{name}</h3>
                        <p>{description}</p>
                    </div>
                </div>

                <MoreVertIcon />
            </div>


            <div className='post_body'>
                <p>{message}</p>
            </div>
            <div className='post_footer'>
                <div className='foot_option'>
                    <ThumbUpIcon />
                    <span>Like</span>
                </div>
                <div className='foot_option'>
                    <CommentIcon />
                    <span>Comment</span>
                </div>
                <div className='foot_option'>
                    <ShareIcon />
                    <span>Share</span>
                </div>
                <div className='foot_option'>
                    <SendIcon />
                    <span>Send</span>
                </div>
            </div>
        </div>
    )
}

export default Post
