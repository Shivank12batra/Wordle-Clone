import React from 'react'

export default function Rules({setGameInfo}) {
    const clickHandler = () => {
        setGameInfo(false)
    }
  return (
    <div className='rules'>
        <div>
            <i onClick={clickHandler} className='fas fa-window-close cross-icon'></i>
            <h1>HOW TO PLAY?</h1>
            <h2>Guess the Wordle in 6 tries</h2>
            <p>• Each guess must be a 6-letter word.</p>
            <p>• The color of the tiles will change to show how close your guess was to the word</p>
            <p>• <span style={{'color':'#5ac85a', 'fontWeight':'bold'}}>Green:</span> Correct Guess, <span style={{'color':'#e2cc68', 'fontWeight':'bold'}}>Yellow</span>  Current Guess, Wrong Position, <span style={{'color':'#a1a1a1', 'fontWeight':'bold'}}>Grey:</span> Not In Wordle</p>
            <p>• Wordle is a 6 letter second name of a football player playing in the top 5 European Leagues.</p>
        </div>
    </div>
  )
}
