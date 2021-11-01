import styles from './backgroundVideo.module.css';

const Video = () => {
    return (
        <div>
            <video id='backgroundVideo' loop autoPlay muted style={{width:'100%'}}>
                <source src='/trim.mp4' type="video/mp4" />
                <source src='/trim.mp4' type="video/ogg" />
                Your browser does not support video.
            </video>
        </div>
    )
}

export default Video;