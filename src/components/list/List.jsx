import styles from './list.module.css'
import UserInfo from './userInfo/userInfo';
import ChatList from './chatList/ChatList';

const List = () => {
  return (
    <div className={styles.list}>
        <UserInfo />
        <ChatList/>
    </div>
  )
}

export default List;