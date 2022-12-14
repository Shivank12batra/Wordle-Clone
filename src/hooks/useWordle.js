import {useState} from 'react';

const useWordle = (solution, players) => {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState(''); // current guess being typed
    const [guesses, setGuesses] = useState([...Array(6)]); // each guess is an array
    const [history, setHistory] = useState([]); // each guess is a string
    const [isCorrect, setIsCorrect] = useState(false); // whether the guess is correct or not
    const [usedKeys, setUsedKeys] = useState({}); // {a: 'green', b: 'yellow', c: 'grey'}
    const [showError, setShowError] = useState(''); // error message: str
 
    // format a guess into an array of letter objects
    // e.g.[{key : 'a', color : 'yellow'}]
    const formatGuess = () => {
        let solutionArray = [...solution];
        let formattedGuess = [...currentGuess].map((l, idx) => {
            if (currentGuess[idx].toLowerCase() === solutionArray[idx]) {
                return {key : l, color : 'green'}
            }
            else if (solutionArray.includes(l)) {
                return {key : l, color : 'yellow'}
            } else return {key : l, color : 'grey'}
        })
        addNewGuess(formattedGuess);
    }

    // add a new guess to the guesses state
    // update the isCorrect state if the guess is correct
    // add one to the turn state
    const addNewGuess = (formattedGuess) => {
        if (currentGuess === solution) {
            setIsCorrect(true)
        }
        setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses];
            newGuesses[turn] = formattedGuess;
            return newGuesses
        })
        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess]
        })
        setTurn((prevTurn) => {
            return prevTurn + 1;
        })
        setUsedKeys((prevUsedKeys) => {
            let newKeys = {...prevUsedKeys};
            formattedGuess.map((l) => {
                const currentColor = newKeys[l.key];

                if (l.color === 'green') {
                    newKeys[l.key] = 'green'
                    return
                }
                else if (l.color === 'yellow' && currentColor !== 'green') {
                    newKeys[l.key] = 'yellow'
                    return
                }
                else if (l.color === 'grey' && currentColor !== 'green' && currentColor !== 'yellow') {
                    newKeys[l.key] = 'grey'
                    return
                }
            })
            return newKeys;
        })
        setCurrentGuess('');
        setShowError('');
    }

    // handle keyup event to update currentGuess
    // if user presses enter, add the new guess
    const handleKeyUp = ({key}) => {
        if (key === 'Enter') {
            // only add guess if turn is less than 6
            if (turn > 6) {
                setShowError('Sorry! you have exhausted all your turns!')
                return
            }
            // do not allow duplicate words
            if (history.includes(currentGuess)) {
                setShowError('You have already guessed this word. Try another!')
                return
            }
            // check words is 6 char long or not
            if (currentGuess.length !== 6) {
                setShowError('Word must be 6 characters length!')
                return
            }
            if (!players.includes(currentGuess.toLowerCase())) {
                setShowError('Not a relevant name!')
                return
            }
            formatGuess(currentGuess);
        }
        if (key === 'Backspace') {
            setShowError('');
            setCurrentGuess(prev => prev.slice(0, -1));
            return
        }
        if (/^[A-Za-z]$/.test(key)) {
            setShowError('');
            setCurrentGuess(prev => (prev + key));
            return
        }

    }

        // handle keyup event to update currentGuess
    // if user presses enter, add the new guess
    const clickHandler = (key) => {
        if (key === 'Enter') {
            // only add guess if turn is less than 6
            if (turn > 6) {
                return
            }
            // do not allow duplicate words
            if (history.includes(currentGuess)) {
                setShowError('You have already guessed this word. Try another!')
                return
            }
            // check words is 6 char long or not
            if (currentGuess.length !== 6) {
                setShowError('Word must be 6 characters length!')
                return
            }
            if (!players.includes(currentGuess)) {
                setShowError('Not a relevant name!')
                return
            }
            formatGuess(currentGuess);
        }
        if (key === 'Backspace') {
            setShowError('');
            setCurrentGuess(prev => prev.slice(0, -1));
            return
        }
        if (/^[A-Za-z]$/.test(key)) {
            setShowError('');
            setCurrentGuess(prev => (prev + key));
            return
        }

    }

    return {turn, currentGuess, setCurrentGuess, guesses, isCorrect, usedKeys, showError, setShowError, handleKeyUp, clickHandler};


}

export default useWordle;