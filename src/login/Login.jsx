import React, { useState } from 'react'
import styles from './login.module.css'

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: ""
  });
  
  const handleAvatar =e => {
    if (e.target.files[0]) {
        setAvatar({
            file:e.target.files[0],
            url:URL.createObjectURL(e.target.files[0])
        })
    }
  }
  return (
    <div className={styles.login}>
        <div className={styles.item}>
            <h2>Welcome Back</h2>
            <form action="">
                <input type="text" placeholder='Email' name='email'/>
                <input type="password" placeholder='Password' name='password'/>
                <button>Sign In</button>
            </form>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.item}>
            <h2>Create Account</h2>
            <form action="">
                <label htmlFor="file">
                    <img src={avatar.url || "./avatar.png"} alt=""/>
                    Upload Photo
                </label>
                {/* <input type="file" id={styles['file']} style={{display:'none'}} /> */}
                <input type="file" id='file' style={{display:'none'}} onChange={handleAvatar}/>
                <input type="text" placeholder='Username' name='username'/>
                <input type="text" placeholder='Email' name='email'/>
                <input type="password" placeholder='Password' name='password'/>
                <button>Sign Up</button>
                
            </form>
        </div>
    </div>
  )
}

export default Login;