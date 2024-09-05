import styles from './EditUserModel.module.css';


const EditUserModel = ({ setIsEditVisible, name }) => {
    return (
        <div className={`${styles.modalContainer}`} >
            <div className={`${styles.editUContainer}`}>
                <h2>Modify Users for : {name}</h2>
                <form className={`${styles.checkboxCon}`}>
                    <div> <input type="checkbox" id="user1" name="user1" value="Bike" className={`${styles.checkBox}`} />
                        <label className={`${styles.label}`} for="user1"> User1</label> </div>
                    <div> <input type="checkbox" id="user2" name="user2" value="Car" className={`${styles.checkBox}`} />
                        <label className={`${styles.label}`} for="user2"> User2</label> </div>
                    <div> <input type="checkbox" id="User3" name="user3" value="Boat" className={`${styles.checkBox}`} />
                        <label className={`${styles.label}`} for="User3"> User3</label> </div>
                    <div> <input type="checkbox" id="user4" name="user4" value="Car" className={`${styles.checkBox}`} />
                        <label className={`${styles.label}`} for="user4"> User4</label> </div>
                    <div> <input type="checkbox" id="user5" name="user5" value="Car" className={`${styles.checkBox}`} />
                        <label className={`${styles.label}`} for="user5"> User5</label> </div>
                    <div> <input type="checkbox" id="user6" name="user6" value="Car" className={`${styles.checkBox}`} />
                        <label className={`${styles.label}`} for="user6"> User6</label> </div>
                    <div className={`${styles.btnWrapper}`}>
                        <button className={`${styles.cnlBtn}`} onClick={(e) => {
                            e.preventDefault();
                            setIsEditVisible(false);
                        }}>Cancel</button>
                        <button className={`${styles.submitBtn}`} onClick={(e) => {
                            e.preventDefault();
                        }}>Save</button>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default EditUserModel;