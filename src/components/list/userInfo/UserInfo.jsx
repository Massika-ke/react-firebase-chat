import { useUserStore } from '../../../lib/userStore';


import styles from './userInfo.module.css'

const UserInfo = () => {
  const { currentUser } = useUserStore();

  return (
    <div className={styles.userInfo}>
        <div className={styles.user}>
            <img src={ currentUser.avatar || "./avatar.png"} alt="" />
            <h2>{currentUser.username}</h2>
        </div>
        <div className={styles.icons}>
            <img src="./more.png" alt="" />
            <img src="./video.png" alt="" />
            <img src="./edit.png" alt="" />
        </div>
    </div>
  )
}

export default UserInfo;