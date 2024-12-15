import styles from './addUser.module.css'

const AddUser = () =>{
    return(
         <div className={styles.addUser}>
            <form action="">
                <input type="text" placeholder="Username" name="username" />
                <button>Search</button>
            </form>
            <div className={styles.user}>
                <div className={styles.detail}>
                    <img src="./avatar.png" alt="" />
                    <span>Massika Joe</span>
                </div>
                <button>Add User</button>
            </div>
        </div>
    );
};

export default AddUser;