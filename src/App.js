import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home'

import NavBar from './Components/NavBar/NavBar';
import CropSuggestion from './Components/CropSuggestion/CropSuggestion';
import Login from './Components/Login/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <Routes>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/CropSuggestion' element={<CropSuggestion/>}></Route>
          <Route exact path='/' element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
