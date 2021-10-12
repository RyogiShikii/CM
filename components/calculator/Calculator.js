import { useState } from 'react';

import styles from './calculator.module.css';
import Slider from '@mui/material/Slider';
import Button from '../customButtons/Button';
import { FcApproval } from 'react-icons/fc';

const Calculator = () => {
    const [loanAmount, setLoanAmount] = useState(300);

    const amountChangeHandler = (event, newValue) => {
        setLoanAmount(newValue);
    }

    const fee = parseFloat(loanAmount*0.15).toFixed(2);
    const total = parseFloat(fee) + parseFloat(loanAmount)

    const marks = [
        {
            value: 100,
            label: '$100',
        },
        {
            value: 1500,
            label: '$1500',
        }
    ]

    return (
        <div className={styles.calculator}>
            <div className={styles.calculatorHeader}>
                <h3>Let's start</h3>
                <span className={styles.calculatorDisplay}>
                    <h4>How much you need today?</h4>
                    <h4>{loanAmount}</h4>
                </span>
                <div className={styles.calculatorSlider}>
                <Slider 
                    aria-label="Loan Amount" 
                    value={loanAmount} 
                    onChange={amountChangeHandler} 
                    defaultValue={300}
                    marks={marks}
                    max={1500}
                    min={100}
                    step={10}
                />
                </div>
            </div>
            <div className={styles.calculatorBody}>
                <div className={styles.bodyTitle}>
                    <h4>Payday Loan</h4>
                    <h5>${loanAmount}</h5>
                </div>
                <div className={styles.bodyDisplay}>
                    <div className={styles.fee}>
                        <p>Fee</p>
                        <p>${fee}</p>
                    </div>
                    <div className={styles.total}>
                        <p>Total</p>
                        <p>${total}</p>
                    </div>
                </div>
                <div className={styles.bodyDescription}>
                    <p><FcApproval /> Get Cash Within 15 minutes</p>
                    <p><FcApproval /> Up To 62 Days Payback</p>
                    <p><FcApproval /> No Other Fee</p>
                    <Button>Apply Now</Button>
                </div>
            </div>
        </div>
    )
}

export default Calculator;