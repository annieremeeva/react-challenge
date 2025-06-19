import React, {useEffect, useRef, useState} from 'react';

const Timer = ({audioSrc, resetClicked}) => {
    const initialTimer = 15;
    const [timer, setTimer] = useState(initialTimer);
    const [playAudio, setPlayAudio] = useState(false)
    const timerContainerRef = useRef(null);
    const timerNumberRef = useRef(null);
    const timerRef = useRef(null);
    const deleteAnimation = () => {
        timerContainerRef.current.classList.remove('countdown-timer_animation');
        timerNumberRef.current.classList.remove('countdown-timer__timer-number');
        timerRef.current.classList.remove('countdown-timer__timer_animation');
    }
    const addAnimation = () => {
        timerContainerRef.current.classList.add('countdown-timer_animation');
        timerNumberRef.current.classList.add('countdown-timer__timer-number');
        timerRef.current.classList.add('countdown-timer__timer_animation');
    }
    const playAudioCue = () => {
        const audio = new Audio(audioSrc);
        audio.play();
        setTimeout(() => {
            audio.pause();
            audio.currentTime = 0;
        }, 2000);
    }
    useEffect(() => {
        const intervalId = setInterval(
            () => {
                setTimer(prevTimer => prevTimer - 1);
                if (timer === 1) {
                    setPlayAudio(true)
                    deleteAnimation();
                } else if (timer === 0) {
                    setPlayAudio(false)
                    setTimer(() => initialTimer);
                    addAnimation();
                } else {
                    setPlayAudio(false)
                }
                if (resetClicked) {
                    deleteAnimation();
                    setTimer(initialTimer);
                    setTimeout(() => addAnimation(), 1);
                }
            }, 1000)
        return () => clearInterval(intervalId)
    });
    return (
        <div ref={timerContainerRef} className="countdown-timer countdown-timer_animation">
            <div ref={timerRef} className="countdown-timer__timer countdown-timer__timer_animation">
                <span ref={timerNumberRef} className="countdown-timer__timer-number">{timer}</span>
            </div>

            {playAudio && playAudioCue()}
        </div>
    );
};

export default Timer;
