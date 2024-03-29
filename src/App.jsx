import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


let wordsArray = [

  { word: "React", meaning: "A JavaScript library for building user interfaces." },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." }

]

function App() {
  const [meaningText, setMeaningText] = useState("")
  const [searchText, setSearchText] = useState("")

  function handleSearch() {
    for(let i=0; i < wordsArray.length; i++) {
      if(wordsArray[i].word.toLowerCase() === searchText.toLowerCase()) {
        return setMeaningText(wordsArray[i].meaning)
      }
    }

    return setMeaningText("Word not found in the dictionary.")
  }
  return (
    <>
    <h1>Dictionary App</h1>
    <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)}/><button onClick={handleSearch}>Search</button>
    <p>Definition: </p>
    {meaningText ? meaningText : null}
    </>
  )
}

export default App
