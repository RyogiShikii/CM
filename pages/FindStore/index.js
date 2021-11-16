import styles from './index.module.css';
import Inform from '../../components/pandemicInfo/Inform';
import TextBanner from '../../components/textBanner/textBanner';

const findStore = () => {
    return (
        <div>
            <Inform />
            <TextBanner />
        </div>
    )
}

export default findStore;