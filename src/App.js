import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';


const App = () => {

  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
      height='100vh'
      projectID='98444411-ce63-4144-a874-31fd5d4743f8'
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) =><ChatFeed { ...chatAppProps } /> } 
    />
  );
}

export default App;