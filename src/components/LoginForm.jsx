import React, { useState } from 'react';
import axios from 'axios';


const LoginForm = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const changeForm = (input) => {
    props.setForm(input);
  } 


  const handleSubmit = async (e) => {

    e.preventDefault();

    //username | password => chat engine => give messages
    
    const authObject = {
      'Project-ID': '98444411-ce63-4144-a874-31fd5d4743f8',
      'User-Name': username,
      'User-Secret': password
    }
    
    try {
      
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });
      
      //works out => logged in
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();

    
    } catch (error) {
      
      // else error incorrect user or password

      setError('Oops, incorrect credentials')
    }

  }


  return (
    <div className='wrapper'>
      <div className='form'>
        <h1 className='title'>Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} className='input' placeholder='username' required />
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='password' required />
          <div align="center">
            <button type='submit' className='button'>
              <span>Start Chatting</span>
            </button>
              <p>Not Registered yet? <a onClick={()=> changeForm('register')}>Click Here to Register</a></p>
          </div>
          <h2 className='error'> {error}</h2>

        </form>
      </div>
    </div>
  );


}

export default LoginForm