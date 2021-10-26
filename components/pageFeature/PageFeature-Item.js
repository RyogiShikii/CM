import Image from "next/image";
import styles from './pageFeature-item.module.css';

const PageFeatureItem = (props) => {
    return (
        <div>
            <div className={styles.image}>
                <Image
                    alt='Icon'
                    src={`/icons/${props.src}`}
                    layout='responsive'
                    width={48}
                    height={48}
                />
            </div>
            <h5>{props.title}</h5>
            <p>{props.content}</p>
        </div>
    )
}

export default PageFeatureItem;