import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginuser } from '../features/userSlice';
import "../css/login.css"
import { auth } from '../firebase';

function Login() {

    const [signUp, setSignUp] = useState(false);
    const [name, setName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const register = (e) => {
        e.preventDefault();
        if (!name) { return alert("name shouldn't be empty") }
        if (!photoURL) { return alert(" shouldn't be empty") }
        if (!email) { return alert("email shouldn't be empty") }
        if (!password) { return alert("password shouldn't be empty") }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: photoURL
            }).then(() => {
                dispatch(loginuser({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    photoURL: photoURL,
                    displayName: name
                }))
            })
        }).catch(error => alert(error));

        setName("");
        setPhotoURL("");
        setEmail("");
        setPassword("");
    }

    const signin = (e) => {
        e.preventDefault();
        if (!email) { return alert("email shouldn't be empty") }
        if (!password) { return alert("password shouldn't be empty") }

        auth.signInWithEmailAndPassword(email, password).then(({ user }) => {
            dispatch(loginuser({
                email: user.email,
                uid: user.uid,
                photoURL: user.photoURL,
                displayName: user.displayName
            }))
        }).catch(error => alert(error))
    }
    return (
        <>
            <div className='loginscreen'>
                <h1>Linked<img src='https://cdn-icons-png.flaticon.com/512/3536/3536505.png' /></h1>
                {
                    signUp === true ?
                        (
                            <form onSubmit={register}>
                                <input type="text" placeholder='Full Name' value={name} onChange={e => setName(e.target.value)} />
                                <input type="text" placeholder='Profile Picture' value={photoURL} onChange={e => setPhotoURL(e.target.value)} />
                                <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                                <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                                <input type="submit" value='Sign Up' />
                                <h4>Already a member ? <span onClick={e => setSignUp("")}>Login here</span></h4>
                            </form>
                        )
                        :
                        (
                            <form onSubmit={signin}>
                                <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                                <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                                <input type="submit" value='Sign In' />
                                <h4>Not a member ? <span onClick={e => setSignUp(true)} >Register here</span></h4>
                            </form>
                        )
                };
            </div>
        </>
    )
}

export default Login
