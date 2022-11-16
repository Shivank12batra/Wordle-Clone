import React, { useEffect, useState } from 'react';
import Wordle from './components/Wordle';

const App = () => {
    const [solution, setSolution] = useState('');
     useEffect(() => {
        fetch('http://localhost:3001/solutions').then(res => res.json()).then(data => {
            const randomSolution = data[Math.floor(Math.random()*data.length)];
            setSolution(randomSolution.name.toLowerCase());
        });
    }, [setSolution])
    
    return (
        <div className='App'>
                <h1> <i className='fas fa-futbol'></i> Footie Lingo <i className='fas fa-futbol'></i></h1>
            {solution && <Wordle solution={solution}/>}
        </div>
    )
}

export default App;