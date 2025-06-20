import React, {useState} from 'react';
import QuizSlide from "./quizSlide.jsx";
import Timer from "../timer.jsx";

const Quiz = () => {
    const audioSrc = '../../../src/assets/alarm-1.mp3'
    const slides = [
        {
            question: "What is the Weasley’s owl called?",
            answers: [
                {text: "Earnie", correct: false},
                {text: "Errol", correct: true},
                {text: "Erin", correct: false},
                {text: "Eli", correct: false},
            ],
        },
        {
            question: "What is Cedric's dad called?",
            answers: [
                {text: "Arthur", correct: false},
                {text: "Andrew", correct: false},
                {text: "Allen", correct: false},
                {text: "Amos", correct: true},
            ],
        }
    ]
    const [score, setScore] = useState(0);
    const [needsReset, setNeedsReset] = useState(false);
    const updateScore = (newValue) => {
        setScore(newValue);
    }
    const updateNeedsReset = (newValue) => {
        setNeedsReset(newValue);
        console.log(needsReset);
    }
    return (
        <div>
            {slides.map((slide, index) => (
                <QuizSlide key={index} updateNeedsReset={updateNeedsReset} updateScore={updateScore} slide={slide} />
            ))}
            <Timer className="quiz__timer" needsReset={needsReset} audioSrc={audioSrc} />
            {score}
        </div>

    );
};

export default Quiz;
