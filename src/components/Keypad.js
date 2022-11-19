import React from 'react'

const letters  = [
  {'key' : 'q'},
  {'key' : 'w'},
  {'key' : 'e'},
  {'key' : 'r'},
  {'key' : 't'},
  {'key' : 'y'},
  {'key' : 'u'},
  {'key' : 'i'},
  {'key' : 'o'},
  {'key' : 'p'},
  {'key' : 'a'},
  {'key' : 's'},
  {'key' : 'd'},
  {'key' : 'f'},
  {'key' : 'g'},
  {'key' : 'h'},
  {'key' : 'j'},
  {'key' : 'k'},
  {'key' : 'l'},
  {'key' : 'z'},
  {'key' : 'x'},
  {'key' : 'c'},
  {'key' : 'v'},
  {'key' : 'b'},
  {'key' : 'Enter'},
  {'key' : 'n'},
  {'key' : 'm'},
  {'key' : 'Backspace'}
]



export default function Keypad({clickHandler, usedKeys}) {
    let buttonStyle = '';
    let color = '';
  return (
    <div className='keypad'>
        {console.log('hello')}
        {letters.map((l, i) => {
            if (l.key === 'Enter' || l.key === 'Backspace') {
                buttonStyle = 'btn-style'
            } else {buttonStyle = 'btn'}
            color = usedKeys[l.key]
           return <button key={i} className={`${buttonStyle} ${color}`} onClick={e => clickHandler(e.target.innerHTML)}>{l.key}</button>
        })}
    </div>
  )
}
