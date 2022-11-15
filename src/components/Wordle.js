import React, { useEffect, useState } from 'react';
import useWordle from '../hooks/useWordle';
import Grid from './Grid';
import Keypad from './Keypad';
import Modal from './Modal';
import errorMessage from './errorMessage';

export default function Wordle({solution}) {
    const {currentGuess, handleKeyUp, clickHandler, usedKeys, guesses, turn, showError, setShowError, isCorrect} = useWordle(solution)
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp);

        // if user wins the game
        if (isCorrect) {
            setTimeout(() => setShowModal(true), 2000)
            window.removeEventListener('keyup', handleKeyUp)
        }

        if (turn > 5 && !isCorrect) {
            setTimeout(() => setShowModal(true), 2000)
            window.removeEventListener('keyup', handleKeyUp)
        }

        // cleaner function to remove event listener to save memory
        return () => window.removeEventListener('keyup', handleKeyUp)
    }, [handleKeyUp]);

    useEffect(() => {
        console.log(guesses, turn, isCorrect);
    }, [guesses, turn, isCorrect])

    return (
        <div>
            <div>Wordle Is: {solution}</div>
            <div>Current Guess: {currentGuess}</div>
            <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} setShowError={setShowError}/>
            <Keypad clickHandler={clickHandler} usedKeys={usedKeys}/>
            {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution}/>}
            {showError && <errorMessage showError={showError}/>}
        </div>
    )
}