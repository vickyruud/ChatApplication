import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = (props) => {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
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
      'Private-Key' : 'f6be6368-122f-48c7-973f-73310e2e42f6'
     
    }

    const user = {
      'first_name': firstName,
      'last_name': lastName,
      'username': username,
      'secret': password
    }

    axios.post(
      'https://api.chatengine.io/users/',
      {
        'username': username,
        'secret': password,
        'first_name': firstName,
        'last_name': lastName
      },
      {'headers' : authObject}
     
    )
      .then(resp => {
        console.log(resp);
        localStorage.setItem('username',username);
        localStorage.setItem('password', password);
        window.location.reload();
        console.log(localStorage.getItem('password'));


      }).catch(error => {
        setError('Oops! Something went wrong. Please try again!');
        console.log(error);
    })
    

  }


  return (
    <div className='wrapper'>
      <div className='form'>
        <h1 className='title'>Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} className='input' placeholder='First Name' required />
          <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} className='input' placeholder='Last Name' required />
          <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} className='input' placeholder='Username' required />
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='Password' required />
          <div align="center">
            <button type='submit' className='button'>
              <span>Start Chatting</span>
            </button>
          </div>
          <h2 className='error'> {error}</h2>

        </form>
      </div>
    </div>
  );


}

export default RegistrationForm