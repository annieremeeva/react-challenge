import React, {useEffect, useRef, useState} from 'react';
import zxcvbn from 'zxcvbn';

const PasswordStrengthChecker = () => {
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState('');
    const passwordRef = useRef(null);
    const barRef = useRef(null);
    const toggleVisibility = () => {
        passwordRef.current.type === 'password' ? passwordRef.current.type = 'text' : passwordRef.current.type = 'password'
    }


    const handlePasswordEnter = (e) => {
        setPassword(e.target.value);
    }
    useEffect(() => {
        barRef.current.classList = `password-strength-checker__progress-bar_${strength} password-strength-checker__progress-bar`;
    }, [strength])
    useEffect(() => {
        const evaluatePassword = () => {
            let passwordScore = zxcvbn(password).score;
            if (password ==='') {
                setStrength('')
            } else if (passwordScore === 0) {
                setStrength('extra-weak');
            } else if (passwordScore === 1) {
                setStrength('weak');
            } else if (passwordScore === 2) {
                setStrength('medium');
            } else if (passwordScore === 3) {
                setStrength('strong');
            } else {
                setStrength('extra-strong');
            }
        }
        evaluatePassword();
    },[password])
    return (
        <div className="password-strength-checker">
            <label htmlFor="password-input-id" className="password-strength-checker__input-container">
                <input onChange={handlePasswordEnter} ref={passwordRef} className="password-strength-checker__input" id="password-input-id" type="password"/>
                <button onClick={toggleVisibility} className="password-strength-checker__show-hide-button" type="button">
                    <img src="src/assets/eye-password-hide.svg" alt="show or hide password" className="password-strength-checker__show-hide-image"/>
                </button>
            </label>
            <div ref={barRef} className="password-strength-checker__progress-bar"></div>
        </div>
    );
};

export default PasswordStrengthChecker;
