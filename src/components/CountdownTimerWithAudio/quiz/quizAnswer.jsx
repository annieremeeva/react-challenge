import React from 'react';

const QuizAnswer = ({answer, onUpdateScore, onHandleAnswerClick, answerClicked, onUpdateNeedsReset}) => {
    const handleCheckAnswer = () => {
        if (!answerClicked && answer.correct) {
            onUpdateScore(prevScore => prevScore + 1);

        }
        onHandleAnswerClick();
        onUpdateNeedsReset(true);
    }
    return (
        <button className="quiz-slide__answer" onClick={handleCheckAnswer}>
            {answer.text}
        </button>
    );
};

export default QuizAnswer;
