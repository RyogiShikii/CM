import styles from './index.module.css';
import Inform from '../../components/pandemicInfo/Inform';
import Video from '../../components/backgroundVideo/backgroundVideo';
import PageFeature from '../../components/pageFeature/PageFeature';
import PageBannerR from '../../components/PageBanner/pageBannerReverse';

const ccPage = () => {
    const items = [
        {
            title:'Easy Apply',
            content:'You can get up to $1500 cash with your valid documents.',
            src:'flash.png'
        },
        {
            title:'Low rate',
            content:'Fixed rate according to BC bylaw and no hidden fees.',
            src:'edit.png'
        },
        {
            title:'Repayment',
            content:'Pay back on your next pay day.',
            src:'calendar_day.png'
        }
    ];
    return (
        <div>
            <Inform />
            <Video src='/trim.mp4' title='Get your money now'/>
            <PageFeature
                title='Do you know you can get your money within 15 minutes?'
                content='Cashmart can help you with very low rate'
                items={items}
            />
            <PageBannerR
                title='Cheque Cashing'
                content={['We can help']}
                button='Find Store'
                src='/pdl-page-banner.jpg'
            />
        </div>
    )
}

export default ccPage;