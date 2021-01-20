import React, { useState } from 'react';
import './Login.css';

import { auth } from './firebase';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState('');

  const loginToApp = (e) => {
    e.preventDefault();
  };

  const register = () => {

  };

  return (
    <div className="login">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png" alt="" />

      <form>
        <input 
          placeholder="Full name (required if registering)" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          type="text" />
        <input 
          placeholder="Profile pic URL (optional)" 
          value={profilePic} 
          onChange={(e) => setProfilePic(e.target.value)} 
          type="text" />
        <input 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          type="email" />
        <input 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          type="password" />
        <button type="submit" onClick={loginToApp}>Sign In</button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>Register Now</span>
      </p>
    </div>
  )
}

export default Login;