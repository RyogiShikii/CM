import styles from './index.module.css';
import Inform from '../../components/pandemicInfo/Inform';
import TextBanner from '../../components/textBanner/textBanner';
import GoogleMap from '../../components/map/googleMap';

const findStore = () => {
    return (
        <div>
            <Inform />
            <TextBanner />
            <GoogleMap />
        </div>
    )
}

export default findStore;