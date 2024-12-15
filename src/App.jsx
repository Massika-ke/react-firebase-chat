import Chat from "./components/chat/Chat"
import Detail from "./components/detail/Detail"
import List from "./components/list/List"
import Notification from "./components/notification/Notification";
import Login from "./login/login";

const App = () => {
  const user = false;

  return (
    <div className='container'>
      { user? 
        ( <>
          <List />
          <Chat />
          <Detail />
          </>): 
        (<Login />)
      }
      <Notification />
    </div>
  )
}

export default App;