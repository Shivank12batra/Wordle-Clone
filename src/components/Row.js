import React, { useEffect } from 'react'

export default function Row({ guess, currentGuess, setCurrentGuess, showError, setShowError}) {

  if (guess) {
    return (
      <div className="row">
        {guess.map((l, i) => (
          <div key={i} className={l.color}>{l.key}</div>
        ))}
      </div>
    )
  }
  if (currentGuess) {
    let letters = currentGuess.split('');
    if (letters.length > 6) {
      letters = letters.slice(0, 6)
      setCurrentGuess(letters.join(''))
    }
    return (
      <div className='row current'>
        {letters.map((l, i) => (
          <div key={i} className="filled">{l}</div>
        ))}
        {[...Array(6 - letters.length)].map((_, i) => (
            <div key={i}></div>
          ))}
      </div>
    )
  }

  return (
    <div className="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
  
}
