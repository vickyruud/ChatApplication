import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';


const App = () => {
  return (
    <ChatEngine
      height='100vh'
      projectID='98444411-ce63-4144-a874-31fd5d4743f8'
      userName='captslow'
      userSecret='123456'
      renderChatFeed={(chatAppProps) =><ChatFeed { ...chatAppProps } /> } 
    />
  );
}

export default App;