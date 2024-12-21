import styles from './list.module.css'
import ChatList from './chatList/ChatList';
import UserInfo from "./userInfo/UserInfo"

const List = () => {
  return (
    <div className={styles.list}>
        <UserInfo />
        <ChatList/>
    </div>
  )
}

export default List;