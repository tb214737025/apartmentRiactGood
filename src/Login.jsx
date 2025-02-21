//import React, { useState } from 'react';
import swal from 'sweetalert'; // Make sure this package is installed
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from './Data';
import { login } from './api';
import { useEffect, useState } from "react"
// import './style.css';

export const Login = () => {
//     const [list,setList]=useState([])
// useEffect(()=>{
//     login().then(x=>{
//         console.log(x.data);
        
//         setList(x.data)
//     })
// },[])
     const [user, setUser] = useState({ email: '', password: '' });
    //  const [errors, ] = useState({ email: '', password: '' });
const u=useSelector(data=>data.currentUser)
    // Selectors for accessing global state
    const users = useSelector((state => state.users));
  
    
    // Dispatch function for sending actions
    const dispatch = useDispatch();

    // Navigate function for redirecting
    // const navigate = useNavigate();

    // Validate user credentials
    const send = () => {
        login(user).then(x=>
            {
                dispatch(setCurrentUser,user)
            console.log(u);
            
        })
        // const { email, password } = user;
        // let filteredUsers = users.filter(
        //     (x) => x.email === email && x.password === password
        // );

        // if (filteredUsers.length > 0) {
        //     const loggedInUser = filteredUsers[0];
        //     dispatch(setCurrentUser(loggedInUser));
            // swal(`Hello! ${loggedInUser.email}`, 'Login successful!', 'success');

            // let relatedAsks = Asking.filter((x) => x.users === loggedInUser.idtu);

            // if (relatedAsks.length > 0) {
            //     dispatch(setCurrentAsk(relatedAsks[0]));
            //     navigate('/Return');
            // } else if (loggedInUser.TypeUser === '2') {
            //     navigate('/Nav');
            // }
    //     } else {
    //         swal('Oops!', 'Login failed! User does not exist.', 'error');
    //         // navigate('/Register');
    //     }
    // };

    // Validate name
    // const checkName = (value) => {
    //     const nameRegex = /^[A-Z]\w[a-zA-Z]{1,20}$/;
    //     setErrors({
    //         ...errors,
    //         username: nameRegex.test(value) ? '' : 'Invalid name!'
    //     });
    };

    // Validate password
    // const checkPassword = (value) => {
    //     setErrors({
    //         ...errors,
    //         password: (value.length >= 4 && value.length <= 16)
    //             ? ''
    //             : 'Password length must be between 4 and 16 characters.'
    //     });
    // };


    return<>
        <div className="login-container">
            <h2 className="login-title">התחברות:</h2>
            <div className="login-form-group">
                <label htmlFor="username">email:</label>
                <input
                    id="username"
                    className="login-input"
                    placeholder="Input name"
                    value={user.email}
                    onChange={(e) => {
                        // checkName(e.target.value);
                        setUser({ ...user, email: e.target.value });
                    }}
                    onBlur={(e) => setUser({ ...user, email: e.target.value })}
                />
                {/* <p className="error">{errors.username}</p> */}
            </div>
            
            <div className="login-form-group">
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    className="login-input"
                    placeholder="Input password"
                    type="password"
                    value={user.password}
                    onChange={(e) => {
                    //     checkPassword(e.target.value);
                        setUser({ ...user, password: e.target.value });
                    }}
                    onBlur={(e) => setUser({ ...user, password: e.target.value })}
                />
                {/* <p className="error">{errors.password}</p> */}
            </div>

            <button className="login-button" onClick={send}>Send</button>
        </div>
 </>
}