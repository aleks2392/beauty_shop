/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import '../styles/quiz.css';
import mask from '../../public/assets/img/mask.svg'
import {Button} from '../ui/Button';
import React from "react";

const SkinQuiz = () => {
    return (
        <section className="skin-quiz">
            <div className="skin-quiz-content">
                <div className="skin-quiz-image">
                    <img src={mask} alt="Skin Quiz" />
                </div>
                <div className="skin-quiz-text">
                    <h2>The Skin Quiz</h2>
                    <p>Meet the quiz that will curate a routine just as unique as you are.</p>
                    <Button className="explore-button" onClick={() => {alert("quize")}}>Explore More</Button>
                </div>
                
            </div>
        </section>
    );
};

export default SkinQuiz;
