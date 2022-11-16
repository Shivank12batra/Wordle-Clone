import React, { useEffect, useState } from 'react';
import useWordle from '../hooks/useWordle';
import Grid from './Grid';
import Keypad from './Keypad';
import Error from './Error';
import Modal from './Modal';

export default function Wordle({solution, players}) {
    const {currentGuess, setCurrentGuess, handleKeyUp, clickHandler, usedKeys, guesses, turn, showError, setShowError, isCorrect} = useWordle(solution, players)
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
            <Grid currentGuess={currentGuess} setCurrentGuess={setCurrentGuess} guesses={guesses} turn={turn} showError={showError} setShowError={setShowError}/>
            <Keypad clickHandler={clickHandler} usedKeys={usedKeys}/>
            {showError && <Error showError={showError}/>}
            {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution}/>}
        </div>
    )
}