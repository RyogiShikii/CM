import styles from './pagebanner-img.module.css';
import Image from 'next/image';

const BannerImage = props => {
    return (
        <div className={styles.bannerImage}>
            <Image
                alt='pageBanner-img'
                src={props.src}
                layout='responsive'
                width={500}
                height={500}
            />
        </div>
    )
}

export default BannerImage;