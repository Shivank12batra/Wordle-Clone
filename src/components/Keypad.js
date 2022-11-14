import React from 'react'

const letters  = [
    {'key' : 'a'},
    {'key' : 'b'},
    {'key' : 'c'},
    {'key' : 'd'},
    {'key' : 'e'},
    {'key' : 'f'},
    {'key' : 'g'},
    {'key' : 'h'},
    {'key' : 'i'},
    {'key' : 'j'},
    {'key' : 'k'},
    {'key' : 'l'},
    {'key' : 'm'},
    {'key' : 'n'},
    {'key' : 'o'},
    {'key' : 'p'},
    {'key' : 'q'},
    {'key' : 'r'},
    {'key' : 's'},
    {'key' : 't'},
    {'key' : 'u'},
    {'key' : 'v'},
    {'key' : 'w'},
    {'key' : 'x'},
    {'key' : 'y'},
    {'key' : 'z'},
    {'key' : 'Enter'},
    {'key' : 'Backspace'}
]

export default function Keypad({clickHandler, usedKeys}) {
    let buttonStyle = '';
    let color = '';
  return (
    <div className='keypad'>
        {letters.map((l, i) => {
            if (l.key === 'Enter' || l.key === 'Backspace') {
                buttonStyle = 'btn-style'
            } else {buttonStyle = 'btn'}
            color = usedKeys[l.key]
            console.log(color)
           return <button key={i} className={`${buttonStyle} ${color}`} onClick={e => clickHandler(e.target.innerHTML)}>{l.key}</button>
        })}
    </div>
  )
}
