import React, { useEffect, useState } from 'react'
import { Avatar } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WorkIcon from '@mui/icons-material/Work';
import FeedIcon from '@mui/icons-material/Feed';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux/es/exports';
import "../css/feed.css";
import Post from './Post';

import FlipMove from 'react-flip-move';

import firebase from 'firebase/compat/app';
import { db } from '../firebase';

function Feed() {
    const user = useSelector(selectUser);

    const [post, setPost] = useState([]);
    const [input, setInput] = useState();
    const submitPost = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            name: user.displayName,
            description: "Developer",
            message: input,
            photoURL: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput("");
    }

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => {
            setPost(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])

    return (
        <div className="feed">
            <div className="feed_input">
                <div className='feed_form'>
                    <Avatar src={user.photoURL} />
                    <form onSubmit={submitPost}>
                        <input type="text" placeholder='Start a post' value={input} onChange={e => setInput(e.target.value)} />
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
            <FlipMove>
                {
                    post.map(({ id, data: { name, description, message, photoURL } }) => {
                        return <Post key={id} name={name} description={description} message={message} photoURL={photoURL} />
                    })
                }
            </FlipMove>
        </div>
    )
}

export default Feed;
