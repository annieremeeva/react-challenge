import React, {useState} from 'react';
import QuizAnswer from "./quizAnswer.jsx";

const QuizSlide = ({slide, updateScore, updateNeedsReset}) => {
    const [answerClicked, setAnswerClicked] = useState(false);
    const handleAnswerClick = () => {
        if (!answerClicked) {
            setAnswerClicked(true);
        }
    }
    return (
        <div>
            <div className="quiz-slide__question">{slide.question}</div>
            <div className="quiz-slide__answers">
                {slide.answers.map((answer, index) => (
                    <QuizAnswer onUpdateNeedsReset={updateNeedsReset} onHandleAnswerClick={handleAnswerClick} onUpdateScore={updateScore} answerClicked={answerClicked} key={index} answer={answer} />
                ))}
            </div>
        </div>
    );
};

export default QuizSlide;
