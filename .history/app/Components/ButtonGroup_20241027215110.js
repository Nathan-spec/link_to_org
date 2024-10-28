import styles from './ButtonGroup.module.css';

const ButtonGroup = () => (
    <div className={styles.buttonGroup}>
        <button className={styles.backButton}>Back</button>
        <p className='text-gray'>
            STEP 1 of 2 
        </p>
    </div>
);

export default ButtonGroup;