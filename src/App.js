import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home'

import NavBar from './Components/NavBar/NavBar';
import CropSuggestion from './Components/CropSuggestion/CropSuggestion';
import Login from './Components/Login/Login';
import Market from './Components/Market/Market';

import useFetch from './Hooks/useFetch';

function App() {
    const product_data = useFetch('http://localhost:2020/products')

  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <Routes>
          <Route exact path='/Market' element={<Market product_data={product_data}/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/CropSuggestion' element={<CropSuggestion/>}></Route>
          <Route exact path='/' element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
