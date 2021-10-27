import styles from './pagebannerreverse.module.css';
import BannerImage from './pageBanner-img';
import BannerContent from './pageBanner-content';

const pageBanner = (props) => {
    return (
        <div className={styles.container}>
            <BannerImage src={props.src} />
            <BannerContent title={props.title} content={props.content} button={props.button}/>
        </div>
    )
}

export default pageBanner;