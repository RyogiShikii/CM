import styles from './footer.module.css';
import Link from 'next/link';
import { Fragment } from 'react';
import { useState, useEffect } from 'react';

const Footer = () => {
    const [year, setYear] = useState('');
    useEffect(() => {
        setYear(new Date().getFullYear().toString());
    },[])

    return (
        <Fragment>
            <div className={styles.footerContainer}>
                <div className={styles.footerNavContainer}>
                    <div className={styles.footerNav}>
                        <Link href='/'>Loan</Link>
                        <p>Payday Loan</p>
                    </div>
                    <div className={styles.footerNav}>
                        <Link href='/'>Cheque Cashing</Link>
                        <p>Government Cheque</p>
                        <p>Business Cheque</p>
                        <p>Personal Cheque</p>
                    </div>
                    <div className={styles.footerNav}>
                        <Link href='/'>Transactions</Link>
                        <p>Western Union</p>
                        <p>Bill Payment</p>
                    </div>
                    <div className={styles.footerNav}>
                        <Link href='/'>Contact Us</Link>
                        <p>604-253-9698</p>
                        <Link href="/">Find Store</Link>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <div className={styles.footerBottomContainer}>
                    <span>View our
                        <Link href='/'> Privacy Policy</Link>
                    </span>
                    <br />
                    <span>
                        &copy; {year} Cashmart Payday Loan Inc. All Rights Reserved.
                    </span>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer;