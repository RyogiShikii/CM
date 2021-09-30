import styles from './button.module.css';

const Button = (props) => {
    return <button className={styles.customButton}>{props.children}</button>
}

export default Button;