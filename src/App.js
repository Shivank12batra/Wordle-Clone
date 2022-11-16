import React, { useEffect, useState } from 'react';
import Wordle from './components/Wordle';
import Rules from './components/Rules';

const App = () => {
    const [solution, setSolution] = useState('');
    const [players, setPlayers] = useState([]);
    const [gameInfo, setGameInfo] = useState(false);
     useEffect(() => {
        fetch('http://localhost:3001/solutions').then(res => res.json()).then(data => {
            const playerNames = data.map((item) => item.name.toLowerCase())
            const randomSolution = data[Math.floor(Math.random()*data.length)];
            setSolution(randomSolution.name.toLowerCase());
            setPlayers(playerNames);
        });
    }, [])

    const clickHandler = () => {
        setGameInfo(true);
    }
    
    return (
        <div className='App'>
            <div className='header'>
                <i className='fas fa-futbol'></i>
                <h1>Footie Lingo</h1>
                <i className='fas fa-futbol'></i>
            </div>
            <span><i onClick={clickHandler} className="fa fa-question-circle question-style"></i></span>
            {gameInfo && <Rules setGameInfo={setGameInfo}/>}
            {solution && <Wordle solution={solution} players={players}/>}
        </div>
    )
}

export default App;