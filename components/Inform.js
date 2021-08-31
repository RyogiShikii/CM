import styles from './inform.module.css';
import Link from 'next/link';

const Inform = () => {
    return (
        <div className={styles.informMain}>
            <span className={styles.informLabel}>
                <Link href="/Covid19Support">Check </Link>
                how Cashmart can help during Pandemic.
            </span>
        </div>
    )
}

export default Inform;