import React from 'react'

export default function Row({ guess, currentGuess}) {

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
    console.log(letters);

    return (
      <div className="row current">
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
