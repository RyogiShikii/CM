import styles from './index.module.css';
import PageBanner from '../../components/PageBanner/pageBanner';
import PageBannerR from '../../components/PageBanner/pageBannerReverse';
import Inform from '../../components/pandemicInfo/Inform';
import PageFeature from '../../components/pageFeature/PageFeature';
import Calculator from '../../components/calculator/Calculator';


const PdlPage = () => {
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
            <PageBanner
                title='Pay Day Loan'
                content={['Apply for the loan up to $1500']}
                button='Find Store'
                src='/pdl-page-banner.jpg'
            />
            <PageFeature
                title='Why you may need a pay day loan?'
                content='When an unexpected bill or some emergency things happened, pay day loan is an immediate solution for you.'
                items={items}
            />
            <PageBannerR
                title='Check list before your visit'
                content = {['Be at least 18 years of age with valid ID','Have a chequing account','Have a steady source of income','*We may ask for more information']}
                src='/bannerImage/banner1.jpg'
            />
            <PageBanner
                title='Prepare the payment'
                content={['Prepare the payment by your next pay day','We will give you a reminder call before due date','Plan ahead']}
                src='/bannerImage/banner3.jpg'
            />
            <Calculator />
        </div>
    )
}

export default PdlPage;
