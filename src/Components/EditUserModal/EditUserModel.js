import styles from './EditUserModel.module.css';


const EditUserModel = ({ setIsEditVisible, name }) => {
    return (
        <div className={`${styles.modalContainer}`} >
            <div className={`${styles.editUContainer}`}>
                <h2>Modify Users for : {name}</h2>
                <form >
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    <label for="vehicle1"> I have a bike</label><br />
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                    <label for="vehicle2"> I have a car</label><br />
                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                    <label for="vehicle3"> I have a boat</label><br /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>

        </div>
    )
}

export default EditUserModel;