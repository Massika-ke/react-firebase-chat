import { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

import styles from './Chat.module.css';

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleEmoji = e => {
    setText((prev)=> prev + e.emoji);
    setOpen(false);
  }

  return (
    <div className={styles.chat}>
      <div className={styles.top}>
        <div className={styles.user}>
          <img src="./avatar.png" alt="" />
          <div className={styles.texts}>
            <span>Massika Joe</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className={styles.icons}>
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className={styles.center}>cemter</div>
      <div className={styles.bottom}>
        <div className={styles.icons}>
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message...."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className={styles.emoji}>
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className={styles.picker}>
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className={styles.sendButton}>Send</button>
      </div>
    </div>
  );
}

export default Chat;