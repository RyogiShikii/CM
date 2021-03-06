import styles from './pageBanner.module.css';
import BannerImage from './pageBanner-img';
import BannerContent from './pageBanner-content';

const pageBanner = (props) => {
    return (
        <div className={styles.container}>
            <BannerContent title={props.title} content={props.content} button={props.button}/>
            <BannerImage src={props.src} />
        </div>
    )
}

export default pageBanner;