import { useState } from 'react'
import './App.css'
import Tableau from './Components/Tableau'
export default function App() {
  const [count, setCount] = useState(0)
  const suits = ["clubs", "diamonds", "spades", "hearts"]
  const vals = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"]
  const shuffledDeck =  new Array(52)
  function initGame() {
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < vals.length; j++) {
        shuffledDeck[i * vals.length + j] = 
        <img src={"/svg_playing_cards/svg_playing_cards/fronts/"+ suits[i] + "_" + vals[j] + ".svg"} />
      }
    }
    
  }
  initGame()
    
  return (
    <>
        <header className="foundation">Foundationj </header>
        <Tableau />
        <div className="stock"> Stock</div>
        {shuffledDeck}
        
    </>
  )
}

