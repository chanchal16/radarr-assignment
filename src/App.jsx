import './App.css'
import { Routes, Route } from "react-router-dom";
import { CharacterList } from './features/characters/CharacterList'
import { SingleCharacter } from './pages/SingleCharacter';
import { CheckCharacterDetails } from './pages/CheckCharacterDetails';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharacterList/>} />
        <Route path='/characters/:cname' element={<SingleCharacter/>}/>
        <Route path='/play/:name' element={<CheckCharacterDetails/>}/>
      </Routes>
      
    </div>
  )
}

export default App
