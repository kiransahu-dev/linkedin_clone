import React from 'react'
import { Avatar } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WorkIcon from '@mui/icons-material/Work';
import FeedIcon from '@mui/icons-material/Feed';
import "../css/feed.css";
import Post from './Post';
function Feed() {
    return (
        <div className="feed">
            <div className="feed_input">
                <div className='feed_form'>
                    <Avatar />
                    <form>
                        <input type="text" placeholder='Start a post' />
                        <input type="submit" />
                    </form>
                </div>

                <div className="feed_option">
                    <div className='option'>
                        <AddPhotoAlternateIcon style={{ color: '#70b5f9' }} />
                        <span>Photo</span>
                    </div>
                    <div className='option'>
                        <YouTubeIcon style={{ color: '#7fc15e' }} />
                        <span>Video</span>
                    </div>
                    <div className='option'>
                        <WorkIcon style={{ color: '#e7a33e' }} />
                        <span>Event</span>
                    </div>
                    <div className='option'>
                        <FeedIcon style={{ color: '#fc9295' }} />
                        <span>Write Article</span>
                    </div>
                </div>
            </div>
            <Post name="Kiran Kumar Sahu" description="For test purpose only" message="We are learning" photoURL="" />
            <Post name="Kiran Kumar Sahu" description="For test purpose only" message="We are learning" photoURL="" />
            <Post name="Kiran Kumar Sahu" description="For test purpose only" message="We are learning" photoURL="" />
            <Post name="Kiran Kumar Sahu" description="For test purpose only" message="We are learning" photoURL="" />
        </div>
    )
}

export default Feed
