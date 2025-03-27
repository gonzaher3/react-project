import { useState } from 'react'
import './App.css'
import Tableau from './Components/Tableau'
import Card from './Components/Card'
import Foundation from './Components/Foundation'
export default function App() {

  const [count, setCount] = useState(0)
  const suits = ["clubs", "diamonds", "spades", "hearts"]
  const vals = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"]
  const shuffledDeck =  new Array(52)


  function initGame() {

    for (let i = 0; i < suits.length; i++) {

      for (let j = 0; j < vals.length; j++) {
        
        shuffledDeck[i * vals.length + j] = 
        <Card src=
          {"/svg_playing_cards/svg_playing_cards/fronts/" + suits[i] + "_" + vals[j] + ".svg"}
          suit={suits[i]}
          value={vals[i]}
        />

      }
    }
    shuffle(shuffledDeck);
    
  }





  initGame()
    
  return (
    <>
        <Foundation />
        <Tableau />
        <div className="stock"> Stock</div>
        {shuffledDeck}
        
    </>
  )
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {

    const randomIndex = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
}