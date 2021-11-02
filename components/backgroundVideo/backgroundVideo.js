import styles from './backgroundVideo.module.css';

const Video = (props) => {
    return (
        <div className={styles.videoContainer}>
            <video id='backgroundVideo' loop autoPlay muted style={{width:'100%'}}>
                <source src={props.src} type="video/mp4" />
                <source src={props.src} type="video/ogg" />
                Your browser does not support video.
            </video>
            <div className={styles.videoTitle}>
                <h1>Get your money now</h1>
            </div>

        </div>
    )
}

export default Video;