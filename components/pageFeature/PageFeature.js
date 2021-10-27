import styles from './pageFeature.module.css';
import PageFeatureItem from './PageFeature-Item';

const PageFeature = (props) => {
    const featureItem = props.items.map((item,i) => {
        return <PageFeatureItem title={item.title} content={item.content} src={item.src} key={i}/>
    })
    return (
        <div>
            <div className={styles.title}>
                <h2>{props.title}</h2>
                <p>{props.content}</p>
            </div>
            <div className={styles.featureItem}>
                {featureItem}
            </div>
        </div>
    )
}

export default PageFeature;