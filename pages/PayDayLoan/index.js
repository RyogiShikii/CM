import styles from './index.module.css';
import PageBanner from '../../components/PageBanner/pageBanner';
import Inform from '../../components/pandemicInfo/Inform';
import PageFeature from '../../components/pageFeature/PageFeature';


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
                content='Apply for the loan up to $1500'
                src='/pdl-page-banner.jpg'
            />
            <PageFeature
                title='Why you may need a pay day loan?'
                content='When an unexpected bill or some emergency things happened, pay day loan is an immediate solution for you.'
                items={items}
            />
        </div>
    )
}

export default PdlPage;
