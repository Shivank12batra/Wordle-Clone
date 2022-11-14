import React, { useEffect, useState } from 'react';
import useWordle from '../hooks/useWordle';
import Grid from './Grid';
import Keypad from './Keypad';
import Modal from './Modal';

export default function Wordle({solution}) {
    const {currentGuess, handleKeyUp, clickHandler, usedKeys, guesses, turn, isCorrect} = useWordle(solution)
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp);

        // if user wins the game
        if (isCorrect) {
            console.log('congrats, you win!')
            window.removeEventListener('keyup', handleKeyUp)
        }

        if (turn > 5 && !isCorrect) {
            console.log('sorry, you have exhausted all your six turns!')
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
            <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
            <Keypad clickHandler={clickHandler} usedKeys={usedKeys}/>
            {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution}/>}
        </div>
    )
}