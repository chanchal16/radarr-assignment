import './App.css'
import { Routes, Route } from "react-router-dom";
import { CharacterList } from './features/characters/CharacterList'
import { SingleCharacter } from './pages/SingleCharacter';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharacterList/>} />
        <Route path='/characters/:cname' element={<SingleCharacter/>}/>
      </Routes>
      
    </div>
  )
}

export default App
