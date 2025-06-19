import React, {useEffect, useRef, useState} from 'react';
import Timer from "./timer.jsx";

const CountdownTimer = () => {
    const [audioSrc, setAudioSrc] = useState('src/assets/alarm-1.mp3');
    const [resetTimer, setResetTimer] = useState(false);
    const audioInputRef = useRef(null);
    const timerRef = useRef(null);
    const handleChooseAudio = (event) => {
        const file = event.target.files[0];
        if (file) {
            const src = URL.createObjectURL(file);
            setAudioSrc(src);
        }
    }

    return (
        <div className="countdown-timer__container">
            <input className="countdown-timer__input" onChange={handleChooseAudio} ref={audioInputRef} type="file" accept="audio/*" />
            <Timer resetClicked={resetTimer} ref={timerRef} audioSrc={audioSrc} />
            <button onClick={()=> {
                setResetTimer(true);
                console.log(resetTimer);
                setTimeout(()=>setResetTimer(false), 1000);
            }} className="countdown-timer__reset">Reset</button>
        </div>

    );
};

export default CountdownTimer;
