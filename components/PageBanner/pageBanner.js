import styles from './pageBanner.module.css';
import Image from 'next/image';
import Button from '../customButtons/Button';

const pageBanner = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <Button>Find Store</Button>
            </div>
            <div className={styles.imageContainer}>
                <Image
                    alt='pageBanner-img'
                    src={props.src}
                    layout='responsive'
                    width={500}
                    height={500}
                />
            </div>
        </div>
    )
}

export default pageBanner;