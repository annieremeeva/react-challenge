import React from 'react';

const QuizAnswer = ({answer, correct, updateScore, score}) => {
    
    return (
        <button className="quiz-slide__answer" onClick={updateScore}>

        </button>
    );
};

export default QuizAnswer;
