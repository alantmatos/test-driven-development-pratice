import React from 'react';
import styles from './index.css';
import { useState } from 'react';


const Counter = () => {

    const [counter, setCounter] = useState(0);
    const [increment, setIncremet] = useState(1);


    return (
        <div className='counter-container'>

            <div className='counter-title'>
                <h1 data-testid="counter-header">My Counter</h1>
            </div>

            <div className='counter-display-container'>
                <div className='counter-display'>
                    <h1 data-testid='counter-number' className={counter >= 100 ? 'green' : 'normal' && counter <= -100 ? 'red' : 'normal'} >{counter}</h1>
                </div>
            </div>

            <div className='counter-body'>
                <div className='counter-btn'>
                    <button data-testid='add-button' onClick={() => setCounter(counter + increment)}>+</button>
                </div>

                <div className='input-container'>
                    <input type='number' value={increment} data-testid='input' onChange={(e) => { setIncremet(parseInt(e.target.value)) }}></input>
                </div>

                <div className='counter-btn'>
                    <button data-testid='subtract-button' onClick={() => setCounter(counter - increment)}>-</button>
                </div>
            </div>

        </div>
    )
}

export default Counter