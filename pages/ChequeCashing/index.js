import styles from './index.module.css';
import Inform from '../../components/pandemicInfo/Inform';
import Video from '../../components/backgroundVideo/backgroundVideo';

const ccPage = () => {
    return (
        <div>
            <Inform />
            <Video src='/trim.mp4' />
        </div>
    )
}

export default ccPage;