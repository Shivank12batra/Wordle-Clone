import React from 'react'
import Row from './Row'

export default function Grid({currentGuess, setCurrentGuess, guesses, turn, showError, setShowError}) {
  return (
    <div>
        {guesses.map((g, i) => {
          if (turn === i) {
            return <Row key={i} currentGuess={currentGuess}  setCurrentGuess={setCurrentGuess} setShowError={setShowError}/>
          }
          return <Row key={i} guess={g}/>
        })}
    </div>
  )
}
