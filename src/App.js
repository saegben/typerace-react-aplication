// IMPORT
import React, { useState } from 'react'; // useState is independently imported from React

// PRIMARY FUNCTION
function App() {
  // Set button contents
  const buttonTextItems = [
    'Bears, beets, battlestar galactica', // index 0
    'Whats Forrest Gumps password? 1Forrest1', // index 1
    'Where do programmers like to hang out? The Foo Bar' // index 2
  ];
  // Set initial state of the game
  const initialGameState = {
    victory: false, // game hasn't been completed
    startTime: null, // user has not started typing
    endTime: null // user has not finished typing
  }

  // Declare variable and setVariable at the same time, assign state
  const [snippet, setSnippet] = useState(''); // snippet is text
  const [userText, setUserText] = useState(''); // userText is text
  const [gameState, setGameState] = useState(initialGameState); // gameState is contents of initialGameState

  // Use event to update the user text
  function updateUserText(event) { 
    const newUserText = event.target.value; // set state variable to value currently in it
    setUserText(newUserText);
    if (newUserText === snippet) { // if user input matches snippet:
      setGameState({
        ...gameState, // update game state
        victory: true, // set victory to true
        endTime: new Date().getTime() - gameState.startTime // get time user finished
      })
    }
  }

  // Use index to set snippet
  function chooseSnippet(index) {
    setSnippet(buttonTextItems[index]); // assign text from buttons as snippet
    setGameState({
      ...initialGameState, // update game state
      startTime: new Date().getTime() // get time user started 
    });
  }

  /* For lines inside return statement:
  - 57: if victory is true, send msg and game duration
  - 60: map is created with snippetText and index
  */

  return (
    <div>
      <h2>TypeRace</h2>
      <hr />
      <h3>Snippet</h3>
      <div>{snippet}</div>
      <h4>{gameState.victory ? `Done! Woot! Time: ${gameState.endTime}ms` : null}</h4> 
      <input value={userText} onChange={updateUserText} />
      <hr />
      {buttonTextItems.map((snippetText, index) => 
        <button key={index} onClick={() => chooseSnippet(index)}>{snippetText}</button>
      )}
    </div>
  );
}

// EXPORT
export default App;