'use client'

import { useState, useEffect } from 'react';
import Image from "next/image";


const words = ["seatbelt", "speedlimit", "pedestriancrossing", "drivesober", "distractionfree"];

const keyboardLayout = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
];

const HangmanGame = () => {
    const [currentWord, setCurrentWord] = useState('');
    const [guessedWord, setGuessedWord] = useState('');
    const [remainingAttempts, setRemainingAttempts] = useState(6);
    const [winCount, setWinCount] = useState(0);
    const [loseCount, setLoseCount] = useState(0);
    const [hint, setHint] = useState('');

    useEffect(() => {
        startNewGame();
    }, []);

    const handleKeyboardPress = (letter) => {
        if (currentWord.includes(letter)) {
            const newGuessedWord = currentWord
                .split('')
                .map((char, index) => (char === letter ? letter : guessedWord[index]));
            setGuessedWord(newGuessedWord.join(''));

            if (!newGuessedWord.includes('_')) {
                handleWin();
            }
        } else {
            setRemainingAttempts(remainingAttempts - 1);
            if (remainingAttempts === 1) {
                handleLoss();
            } else if (hint === '') {
                setHint('Hint: This ensures safety in a vehicle.');
            } else if (hint === 'Hint: This ensures safety in a vehicle.') {
                setHint('Hint: Follow this to avoid accidents.');
            }
        }
    };

    const handleWin = () => {
        alert(`Woohoo! You guessed it right!. The complete word is ${currentWord}`);
        setWinCount(winCount + 1);
        startNewGame();
    };

    const handleLoss = () => {
        alert(`Uh oh! The correct word was ${currentWord}`);
        setLoseCount(loseCount + 1);
        startNewGame();
    };

    const startNewGame = () => {
        const newWord = words[Math.floor(Math.random() * words.length)];
    
        setCurrentWord(newWord);
 
        console.log(newWord);
        setGuessedWord('_'.repeat(newWord.length));
        setRemainingAttempts(6);
        setHint('');
    };

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100">
            <div className='mb-4'>
            <Image src="/cross.jpg" alt="Company Logo" width={1500} height={500} />

                </div>
            <div className="text-3xl font-bold mb-4">Safety Test</div>
            <div className="text-2xl mb-4">Current Word: {guessedWord}</div>
            {hint && <div className="text-lg bg-black text-white mb-4">{hint}</div>}
            <div className="text-xl mb-4">Remaining Attempts: {remainingAttempts}</div>
            <div className="flex flex-col gap-2">
                {keyboardLayout.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex gap-2 justify-center">
                        {row.map((letter, index) => (
                            <button
                                key={index}
                                onClick={() => handleKeyboardPress(letter)}
                                className={`px-4 py-2 bg-blue-500 text-white rounded ${
                                    guessedWord.includes(letter) ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                                                            >
                                {letter}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
            <div className="text-xl mt-4">Wins: {winCount}</div>
            <div className="text-xl">Losses: {loseCount}</div>
        </div>
    );
};

export default HangmanGame;
