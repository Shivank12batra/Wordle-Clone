import React, { useEffect } from 'react';
import useWordle from '../hooks/useWordle';
import Grid from './Grid';
import Keypad from './Keypad';

export default function Wordle({solution}) {
    const {currentGuess, handleKeyUp, clickHandler, usedKeys, guesses, turn, isCorrect} = useWordle(solution)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp);

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
        </div>
    )
}