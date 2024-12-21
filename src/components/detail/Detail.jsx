import styles from './detail.module.css';
import { auth, db } from '../../lib/firebase';
import { useChatStore } from "../../lib/chatStore"
import { useUserStore } from "../../lib/userStore"
import { doc, updateDoc, arrayRemove, arrayUnion } from "firebase/firestore";


const Detail = () => {

  const { chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock } = useChatStore();
      const { currentUser } = useUserStore();

  const handleBlock = async ()=>{
    if (!user) return;

    const userDocRef = doc(db, "users", currentUser.id)

    try {
      await updateDoc(userDocRef, {
        blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
      });
      changeBlock()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className={styles.detail}>
      <div className={styles.user}>
        <img src={user?.avatar || "./avatar.png"} alt="" />
        <h2>{user?.username}</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className={styles.info}>
        <div className={styles.option}>
          <div className={styles.title}>
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className={styles.option}>
          <div className={styles.title}>
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className={styles.option}>
          <div className={styles.title}>
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className={styles.photos}>
            <div className={styles.photoItem}>
              <div className={styles.photoDetail}>
              <img src="./background.jpg" />
              <span>image_001_2024</span>
              </div>
              <img src="./download.png" alt="" className={styles.icon}/>
            </div>
            <div className={styles.photoItem}>
              <div className={styles.photoDetail}>
              <img src="./background.jpg" />
              <span>image_001_2024</span>
              </div>
              <img src="./download.png" alt="" className={styles.icon}/>
            </div>
            <div className={styles.photoItem}>
              <div className={styles.photoDetail}>
              <img src="./background.jpg" />
              <span>image_001_2024</span>
              </div>
              <img src="./download.png" alt="" className={styles.icon}/>
            </div>
          </div>
        </div>
        <div className={styles.option}>
          <div className={styles.title}>
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button onClick={handleBlock}>
          {isCurrentUserBlocked ? "You are Blocked mf!" : isReceiverBlocked ?"User Blocked" : "Block User"}
        </button>
        <button className={styles.logout} onClick={()=>auth.signOut()}>Log Out</button>
      </div>
    </div>
  );
};

export default Detail;