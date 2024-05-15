'use client'

import React, { useState } from "react";
import HangmanGame from "./Hangman";

// MainSection component using named export
export default function MainSection() {
  const [showModal, setShowModal] = useState(false);
  const [gameResult, setGameResult] = useState(null);

  // Function to handle game logic
  const playGame = () => {
    const randomNumber = Math.random(); // Generate a random number
    const isWinner = randomNumber > 0.5; // Example logic, adjust as needed
    setGameResult(isWinner ? "win" : "lose");
    setShowModal(true);
  };

  return (
    <main className="container mx-auto p-8 text-black">
      <h1 className="text-5xl font-bold mb-5">Charity Page</h1>
      <div className="mb-1">

      <HangmanGame />

      </div>
      {/* Donation Popup */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">
              {gameResult === "win" ? "Congratulations!" : "Better Luck Next Time!"}
            </h2>
            <p className="mb-4">Would you like to make a donation?</p>
            <button onClick={() => setShowModal(false)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Donate
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
