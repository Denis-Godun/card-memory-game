
import './App.css'
import { cardConvert } from './mocks';
import { IconName } from './types';
import GameGrid from './Components/GameGrid';



function App() {


  return (
    <>
      {
        <GameGrid/>
      /* {cardConvert(IconName.Sun)} */
      }
    </>
  )
}

export default App
