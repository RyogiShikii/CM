import styles from './category.module.css';
import Card from '../card/Card';

const Category = () => {
    const dummy = [
        {
            id:1,
            title:'Payday Loan',
            description:'Get it today to cover your unexpected expenses.',
            reasons: {
                first:'No bank waiting time.',
                second:'Get Cash in store.',
                third:'Quick repayment.'
            }
        },
        {
            id:2,
            title:'Cheque Cashing',
            description:'Turn your cheque into cash within 10 minute.',
            reasons: {
                first:'Low rate.',
                second:'No waiting for funds to clear.',
                third:'cash money orders or other types of cheques.'
            }
        },
        {
            id:3,
            title:'Western Union',
            description:'Transfer your money securely and easily. ',
            reasons: {
                first:'Certificated Partnership.',
                second:'Easy to track your transfer.',
                third:'Low cost with exchanges rates.'
            }
        },
        {
            id:4,
            title:'Contact Us',
            description:'We are happy to help you.',
            reasons: {
                first:'604-253-9698.',
                second:'info@mycashmart.com',
                third:'2245 Commercial Dr. Vancouver.'
            }
        }
    ];

    const items = dummy.map(item => {
        return <Card title={item.title} description={item.description} reasons={item.reasons} key={item.id}/>
    })

    return (
        <div className={styles.category}>
            <h3>You might be interested in these services</h3>
            <div className={styles.categoryItem}>
                {items}
            </div>
        </div>
    )
}

export default Category;