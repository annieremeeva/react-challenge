import React, {useState} from 'react';
import QuizSlide from "./quizSlide.jsx";

const Quiz = () => {
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
    return (
        <div>
            {slides.map((slide, index) => (
                <QuizSlide key={index} slide={slide} />
            ))}
        </div>
    );
};

export default Quiz;
