import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [selectedUser, setSelectedUser] = useState("None");
    const handleChange = (e)=>{
       setSelectedUser(e.target.value)
       console.log(selectedUser);
    }
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.wrapper}`}>
            <p>Select User: &nbsp;</p>
            <select className={styles.select} value={selectedUser} onChange={handleChange}>
                <option disabled>None</option>
                <option value={'User1'}>User1</option>
                <option value={'User2'}>User2</option>
                <option value={'User3'}>User3</option>
                <option value={'User4'}>User4</option>

            </select>
            </div>
           
        </div>
    )
}

export default Navbar;