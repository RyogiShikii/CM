import styles from './index.module.css';
import Inform from '../../components/pandemicInfo/Inform';
import Video from '../../components/backgroundVideo/backgroundVideo';

const ccPage = () => {
    return (
        <div>
            <Inform />
            <h1>Get your money right away!</h1>
            <Video />
        </div>
    )
}

export default ccPage;