import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';


const App = () => {

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    window.location.reload();

  }

  if (!localStorage.getItem('username')) return <LoginForm />
  
  return (

    <div>
      {localStorage.getItem('username') && <button onClick={handleLogout}>Logout</button>  }
    <ChatEngine
    height='100vh'
    projectID='98444411-ce63-4144-a874-31fd5d4743f8'
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps) =><ChatFeed { ...chatAppProps } /> } 
    />
    </div>
  );
}

export default App;