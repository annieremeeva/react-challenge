import React, {useRef, useState} from 'react';

const SimpleCounter = () => {
    const initialCountHistory = [];
    const [countHistory, setCountHistory] = useState(initialCountHistory);
    const [count, setCount] = useState(0);
    const [increment, setIncrement] = useState(1);
    const [decrement, setDecrement] = useState(1);
    const counterRef = useRef(null);
    const handleDecrement = () => {
        setCount(count => {
            if (count - decrement >= 0) {
                count = count - decrement;
                counterRef.current.style.color === 'red' ? counterRef.current.style.color = 'white' : '';
                return count;
            } else {
                counterRef.current.style.color = 'red';
                count = 0
                return count
            }
        })
    }
    const handleCustomDecrement = (e) => {
        setDecrement(parseInt(e.target.value))
    }
    const handleCustomIncrement = (e) => {
        setIncrement(parseInt(e.target.value) || 1)
    }
    const handleIncrement = () => {
        setCount(count => {
            if (count + increment <= 100) {
                count = count + increment;
                counterRef.current.style.color === 'red' ? counterRef.current.style.color = 'white' : '';
                return count;
            } else {
                count = 100
                counterRef.current.style.color = 'red';
                return count;
            }
        });
    }
    const handleReset = () => {
        setCount(0);
        counterRef.current.style.color = 'white';
    }
    const handleSave = () => {

        setCountHistory(countHistory.length >= 5 ? [count, ...countHistory].slice(0, -1) : [count, ...countHistory]);
    }
    return (
        <div className="simple-counter">
            <h2>1. Simple Counter </h2>
            <p ref={counterRef}>{count}</p>
            <div className="simple-counter__buttons">
                <button className='simple-counter__button simple-counter__button_decrement' onClick={handleDecrement}>-</button>
                <button className='simple-counter__button simple-counter__button_increment' onClick={handleIncrement}>+</button>
            </div>
            <div className="simple-counter__inputs">
                <input type={'number'} onChange={e => handleCustomDecrement(e)} placeholder={'Enter a decrement'}/>
                <input type={'number'} placeholder={'Enter an increment'} onChange={e => {handleCustomIncrement(e)}}/>
            </div>
            <div className="simple-counter__buttons">
                <button className="simple-counter__button simple-counter__button_reset" onClick={handleReset}>Reset</button>
                <button onClick={handleSave} className="simple-counter__button_save">Save count</button>
            </div>
            <div className="simple-counter__history">
                { countHistory.length === 0 || <h3>Last 5 counts</h3>}
                <ol>
                    { countHistory.map((item, index) => (
                        <li key={index}>{ item }</li>
                        ))}
                </ol>
            </div>

        </div>
    )
};

export default SimpleCounter;