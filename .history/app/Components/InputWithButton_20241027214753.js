import { Input } from "@nextui-org/input";
import styles from './InputWithButton.module.css';


const InputWithButton = () => (
    <div className={styles.inputContainer}>
        <Input type="int" placeholder="Enter Number" className={styles.inputField}/>
        <button></button>
    </div>
)