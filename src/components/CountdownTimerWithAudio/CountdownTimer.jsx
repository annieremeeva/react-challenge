import React, {useEffect, useRef, useState} from 'react';

const CountdownTimer = () => {
    const [initialTimer, setInitialTimer] =  useState(10);
    const [timer, setTimer] = useState(initialTimer)
    const [playAudio, setPlayAudio] = useState(false)
    const [audioSrc, setAudioSrc] = useState('src/assets/alarm-1.mp3');
    const audioInputRef = useRef(null);
    const timerContainerRef = useRef(null);
    const timerNumberRef = useRef(null);
    const timerRef = useRef(null);
    const stopTimer = (intervalId) => {
        clearInterval(intervalId)
    }
    const handleAnimationDuration = () => {
        timerContainerRef.current.style.animationDuration = `${initialTimer}s`;
        timerRef.current.style.animationDuration = `${timer}s`;
    }
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
        handleAnimationDuration();
        const intervalId = setInterval(
        () => {
            setTimer(prevTimer => prevTimer - 1);
            if (timer === 1) {
                setPlayAudio(true)
                deleteAnimation();
            } else if (timer === 0) {
                setPlayAudio(false)
                setTimer(() => 10);
                addAnimation();
                handleAnimationDuration();
            } else {
                setPlayAudio(false)
            }
        }, 1000)
        // if (timer === 0) stopTimer(intervalId)
        return () => clearInterval(intervalId)
    });


    const handleChooseAudio = (event) => {
        const file = event.target.files[0];
        if (file) {
            const src = URL.createObjectURL(file);
            setAudioSrc(src);
        }
    }
    return (
        <div ref={timerContainerRef} className="countdown-timer countdown-timer_animation">
            <input className="countdown-timer__input" onChange={handleChooseAudio} ref={audioInputRef} type="file" accept="audio/*" />
            <div ref={timerRef} className="countdown-timer__timer countdown-timer__timer_animation">
                <span ref={timerNumberRef} className="countdown-timer__timer-number">{timer}</span>
            </div>

            {playAudio && playAudioCue()}
        </div>
    );
};

export default CountdownTimer;
