import styles from './pagebanner-content.module.css';
import Button from '../customButtons/Button';
import { FcApproval } from 'react-icons/fc';

const BannerContent = props => {
    let items;
    let contentStyle;
    if(props.content.length<=1){
        contentStyle = styles.bannerContent;
        items = props.content.map((item,i) => {
            return <p key={i}>{item}</p>
        });
    }else{
        contentStyle = styles.list
        items = props.content.map((item,i) => {
            return <div style={{display:'flex'}} key={i}><FcApproval /><p>{item}</p></div>
        });
    }

    return (
        <div className={contentStyle}>
            <h1>{props.title}</h1>
            {items}
            {props.button && <Button>{props.button}</Button>}
        </div>
    )
}

export default BannerContent;