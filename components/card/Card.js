import styles from './card.module.css';
import Button from '../customButtons/Button';
import { FcApproval } from 'react-icons/fc';

const Card = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardTitle}>
                <h5>{props.title}</h5>
            </div>
            <div className={styles.cardDescription}>
                <p>{props.description}</p>
            </div>
            <div className={styles.cardContent}>
                <h6>What may interest you:</h6>
                <p><FcApproval />{props.reasons.first}</p>
                <p><FcApproval />{props.reasons.second}</p>
                <p><FcApproval />{props.reasons.third}</p>
            </div>
            <Button>Learn More</Button>
        </div>
    )
}

export default Card;