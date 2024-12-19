import { useEffect, useRef, useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

import './chat.css';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../lib/firebase';

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [chat, setChat] = useState();

  const endRef = useRef(null);

  useEffect(()=>{
    endRef.current?.scrollIntoView({ behaviour:"smooth" });
  }, []);

  useEffect(()=>{
    const unSub = onSnapshot(doc(db, "chats", ""), (res) =>{
      setChat(res.data);
    });

    return ()=>{
      unSub();
    }
  }, []);

  const handleEmoji = e => {
    setText((prev)=> prev + e.emoji);
    setOpen(false);
  }

  return (
// Chat center top display
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Massika Joe</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>

{/* Chat Center */}
      <div className="center">
         <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Vel eum debitis dolorum quasi recusandae placeat dignissimos quos?
            </p>
            <span>1 min ago</span>
          </div>
         </div>
         <div className="message own">
          <div className="texts">
            <img src="./background.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Vel eum debitis dolorum quasi recusandae placeat dignissimos quos?
            </p>
            <span>1 min ago</span>
          </div>
         </div>
         <div className="message">
         <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Vel eum debitis dolorum quasi recusandae placeat dignissimos quos?
            </p>
            <span>1 min ago</span>
          </div>
         </div>
         <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Vel eum debitis dolorum quasi recusandae placeat dignissimos quos?
            </p>
            <span>1 min ago</span>
          </div>
         </div>
         <div className="message">
         <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Vel eum debitis dolorum quasi recusandae placeat dignissimos quos?
            </p>
            <span>1 min ago</span>
          </div>
         </div>
         <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Vel eum debitis dolorum quasi recusandae placeat dignissimos quos?
            </p>
            <span>1 min ago</span>
          </div>
         </div>
         <div ref={endRef}></div>
      </div>

      {/* Bottom display */}
      <div className="bottom">
        <div className="icons">
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
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
}

export default Chat;