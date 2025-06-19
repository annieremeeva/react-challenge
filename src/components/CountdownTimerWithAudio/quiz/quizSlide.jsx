import React from 'react';

const QuizSlide = ({slide}) => {
    return (
        <div>
            <div className="quiz-slide__question">{slide.question}</div>
            <div className="quiz-slide__answers">
                {slide.answers.map((answer, index) => (
                    <button key={index}>{answer.text}</button>
                ))}
            </div>
        </div>
    );
};

export default QuizSlide;
