import { useState } from 'react';

import styles from './calculator.module.css';
import Slider from '@mui/material/Slider';

const Calculator = () => {
    const [loanAmount, setLoanAmount] = useState(300);

    const amountChangeHandler = (event, newValue) => {
        setLoanAmount(newValue);
    }

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
                <Slider 
                    aria-label="Loan Amount" 
                    value={loanAmount} 
                    onChange={amountChangeHandler} 
                    defaultValue={300} 
                    valueLabelDisplay="on"
                    marks={marks}
                    max={1500}
                    min={100}
                />
            </div>
            <div className={styles.calculatorBody}>

            </div>
        </div>
    )
}

export default Calculator;