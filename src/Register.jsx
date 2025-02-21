//import React, { useState } from 'react';
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from './Data';
import { register } from './api';
import { useState } from "react"
// import './style.css';

export const Register = () => {
  
    const [user, setUser] = useState({});
    const [errors, setErrors] = useState({});

    const users = useSelector(store => store.users);
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const send = () => {
   register(user).then(x=>
               {
                   dispatch(setCurrentUser,user)
            //    console.log(u);
               
           })
 
   
    };

    return<>
        <div className="register-container">
            <h2>Register:</h2>
          

            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Input password"
                    onChange={(e) => ('password', e.target.value)}
                />
                <p className="error">{errors.password}</p>
            </div>

          
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Input email"
                    onChange={(e) => ('email', e.target.value)}
                />
                <p className="error">{errors.email}</p>
            </div>

     

<button className="login-button" onClick={send}>Send</button>
            </div>
            </>
};