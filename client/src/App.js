import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import NavBar from './Components/NavBar/NavBar';
import CropSuggestion from './Components/CropSuggestion/CropSuggestion';
import Market from './Components/Market/Market';
import Homepage from './Components/Home/Homepage'
import ProductPage from './Components/ProductPage/ProductPage';
// import useFetch from './Hooks/useFetch';
import Cart from './Components/Cart/Cart'
import CropSuggestionHistory from './Components/CropSuggestion/CropSuggestionHistory';
import CropResults from './Components/CropResults/CropResults';
import CheckoutPage from './Components/CheckoutPage/CheckoutPage';
import TransactionStatus from './Components/TransactionStatus/TransactionStatus';
import AboutUs from './Components/AboutUs.js/AboutUs';
import Signuppage from './Components/Signup/Signuppage';
import Loginpage from './Components/Login/Loginpage';
import CropPage from './Components/CropPage/CropPage'
import Discussions from './Components/Discussions/Discussions';
import ChatBot from './Components/ChatBot/ChatBot';
import SearchResults from './Components/Market/SearchResults';

function App() {
  const [buyDetails, setBuyDetails] = useState(null)
  const [history, setHistory] = useState([])
  const CropSuggestionHistoryHandler = (item) => {
    setHistory((prev) => {
      return [...prev, item]
    })
  }

  const onBuyCheckoutHandler = (obj) => {
    setBuyDetails(obj)
  }

  // const { data, isPending: prod_isPending, error: prod_error } = useFetch('http://localhost:2020/products')
  const [prod_data, setProdData] = useState([])
  const [crop_data, setCropData] = useState([])


  useEffect(() => {
    fetch('http://localhost:9999/Market')
      .then(res => res.json())
      .then(data => setProdData(data))
      .catch(err => console.log("Error: ", err))


    fetch('http://localhost:9999/crops')
      .then(res => res.json())
      .then(crops => setCropData(crops))
      .catch(err => console.log("Error: ", err))
  }, [])

  // const searchProducts = (name) => {
  //   fetch('http://localhost:9999/crops')
  //     .then(res => res.json())
  //     .then(crops => setCropData(crops))
  //     .catch(err => console.log("Error: ", err))
  // }


  // const findCrop = (body) => {
  // fetch('http://localhost:9999/cropResults',{
  //   method:'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body:body
  // })
  // }

  // const { data: crop_data, isPending: crop_isPending, error: crop_error } = useFetch('http://localhost:2020/crops')

  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <Routes>
          <Route exact path='/' element={<Homepage />}></Route>
          <Route exact path='/ChatBot' element={<ChatBot />}></Route>
          <Route exact path='/Aboutus' element={<AboutUs />}></Route>
          <Route exact path='/Cart' element={<Cart />}></Route>
          <Route exact path='/transaction' element={buyDetails && <TransactionStatus data={buyDetails} />}></Route>
          <Route exact path='/checkoutpage' element={<CheckoutPage onBuyCheckout={onBuyCheckoutHandler} />}></Route>
          <Route exact path='/cropResults' element={<CropResults crop_data={crop_data} />}></Route>
          <Route exact path='/CropSuggestionHistory' element={<CropSuggestionHistory history={history} />}></Route>
          <Route exact path='/SearchByName/:name' element={prod_data && <SearchResults data={prod_data} />}></Route>
          <Route exact path='/search/fertilizers/' element={prod_data && <Market data={prod_data.filter(x => x.category === "fertilizers")} />}></Route>
          <Route exact path='/search/seeds/' element={prod_data && <Market data={prod_data.filter(x => x.category === "seeds")} />}></Route>
          <Route exact path='/search/pesticides/' element={prod_data && <Market data={prod_data.filter(x => x.category === "pesticides")} />}></Route>
          <Route exact path='/Market' element={<Market data={prod_data.sort(() => Math.random() - 0.5).slice(0, 11)} />}></Route>
          <Route exact path='/CropSuggestion' element={<CropSuggestion onSearch={CropSuggestionHistoryHandler} />}></Route>
          <Route exact path='/discussions' element={<Discussions />}></Route>
          <Route exact path='/login' element={<Loginpage />}></Route>
          <Route exact path='/Signuppage' element={<Signuppage />}></Route>
          <Route exact path='/Loginpage' element={<Loginpage />}></Route>
          <Route exact path='/croppage/:id' element={<CropPage data={crop_data}/>}></Route>
          <Route exact path='/productpage/:id' element={<ProductPage data={prod_data}/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

// if (data) {
//   data.sort(() => Math.random() - 0.5)
//   prod_data = data.slice(0, 8)
// }
export default App;
