import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './Components/NavBar/NavBar';
import CropSuggestion from './Components/CropSuggestion/CropSuggestion';
import Login from './Components/Login/Login';
import Market from './Components/Market/Market';
import Home from './Components/Home/Home'
import ProductPage from './Components/ProductPage/ProductPage';
import useFetch from './Hooks/useFetch';

function App() {
  
    const {data,isPending:prod_isPending,error:prod_error} = useFetch('http://localhost:2020/products')
    let prod_data = []
    if(data){
      data.sort(()=>Math.random()-0.5)
      prod_data = data.slice(0,8)
    }
    // const {data:crop_data,isPending:crop_isPending,error:crop_error} = useFetch('http://localhost:2020/crops')
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <Routes>
          <Route exact path='/productpage/:id' element={<ProductPage/>}></Route>
          <Route exact path = '/search/fertilizers/' element={!prod_isPending && <Market data={data.filter(x=>x.category==="fertilizers")} isPending={prod_isPending} error={prod_error}/>}></Route>
          <Route exact path = '/search/seeds/' element={!prod_isPending && <Market data={data.filter(x=>x.category==="seeds")} isPending={prod_isPending} error={prod_error}/>}></Route>
          <Route exact path = '/search/pesticides/' element={!prod_isPending && <Market data={data.filter(x=>x.category==="pesticides")} isPending={prod_isPending} error={prod_error}/>}></Route>
          <Route exact path='/Market' element={<Market data={prod_data} isPending={prod_isPending} error={prod_error}/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/CropSuggestion' element={<CropSuggestion/>}></Route>
          <Route exact path='/' element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
