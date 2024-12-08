import styles from './list.module.css'
import ChatList from './ChatList/chatList'
import UserInfo from './userInfo/userInfo';


const List = () => {
  return (
    <div className={styles.list}>
        <UserInfo />
        <ChatList/>
    </div>
  )
}

export default List;