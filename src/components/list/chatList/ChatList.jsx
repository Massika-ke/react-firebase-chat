import { useState } from 'react'

import styles from './chatList.module.css'
import AddUser from './addUser/AddUser';

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
  
  return (
    <div className={styles.chatList}>
      <div className={styles.search}>
        <div className={styles.searchBar}>
          <img src="./search.png" alt="" />
          <input type="text" placeholder='Search' />
        </div>
        <img src={addMode ? "./minus.png" : "./plus.png"} alt="" className={styles.add} 
        onClick={()=> setAddMode((prev)=>!prev)}/>
      </div>

      <div className={styles.item}>
        <img src="./avatar.png" alt="" />
        <div className={styles.texts}>
          <span>Massika Joe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className={styles.item}>
        <img src="./avatar.png" alt="" />
        <div className={styles.texts}>
          <span>Massika Joe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className={styles.item}>
        <img src="./avatar.png" alt="" />
        <div className={styles.texts}>
          <span>Massika Joe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className={styles.item}>
        <img src="./avatar.png" alt="" />
        <div className={styles.texts}>
          <span>Massika Joe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className={styles.item}>
        <img src="./avatar.png" alt="" />
        <div className={styles.texts}>
          <span>Massika Joe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className={styles.item}>
        <img src="./avatar.png" alt="" />
        <div className={styles.texts}>
          <span>Massika Joe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className={styles.item}>
        <img src="./avatar.png" alt="" />
        <div className={styles.texts}>
          <span>Massika Joe</span>
          <p>Hello</p>
        </div>
      </div>
      {addMode && <AddUser />}
    </div>
  );
};

export default ChatList;