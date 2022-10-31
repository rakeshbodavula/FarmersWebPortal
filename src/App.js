import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import NavBar from './Components/NavBar/NavBar';
import CropSuggestion from './Components/CropSuggestion/CropSuggestion';
import Market from './Components/Market/Market';
import Homepage from './Components/Home/Homepage'
import ProductPage from './Components/ProductPage/ProductPage';
import useFetch from './Hooks/useFetch';
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

  const { data, isPending: prod_isPending, error: prod_error } = useFetch('http://localhost:2020/products')
  const { data: crop_data, isPending: crop_isPending, error: crop_error } = useFetch('http://localhost:2020/crops')
  let prod_data = []
  if (data) {
    data.sort(() => Math.random() - 0.5)
    prod_data = data.slice(0, 8)
  }

  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <Routes>
          <Route exact path='/ChatBot' element={<ChatBot/>}></Route>
          <Route exact path='/Aboutus' element={<AboutUs/>}></Route>
          <Route exact path='/transaction' element={buyDetails && <TransactionStatus data={buyDetails} />}></Route>
          <Route exact path='/checkoutpage' element={<CheckoutPage onBuyCheckout={onBuyCheckoutHandler} />}></Route>
          <Route exact path='/cropResults' element={<CropResults crop_data={crop_data} />}></Route>
          <Route exact path='/CropSuggestionHistory' element={<CropSuggestionHistory history={history} />}></Route>
          <Route exact path='/productpage/:id' element={<ProductPage />}></Route>
          <Route exact path='/search/fertilizers/' element={!prod_isPending && <Market data={data.filter(x => x.category === "fertilizers")} isPending={prod_isPending} error={prod_error} />}></Route>
          <Route exact path='/search/seeds/' element={!prod_isPending && <Market data={data.filter(x => x.category === "seeds")} isPending={prod_isPending} error={prod_error} />}></Route>
          <Route exact path='/search/pesticides/' element={!prod_isPending && <Market data={data.filter(x => x.category === "pesticides")} isPending={prod_isPending} error={prod_error} />}></Route>
          <Route exact path='/Market' element={<Market data={prod_data} isPending={prod_isPending} error={prod_error} />}></Route>
          <Route exact path='/CropSuggestion' element={<CropSuggestion onSearch={CropSuggestionHistoryHandler} />}></Route>
          <Route exact path='/' element={<Homepage />}></Route>
          <Route exact path='/discussions' element={<Discussions />}></Route>

          {/* adding subash work */}
          <Route exact path='/login' element={<Loginpage />}></Route>
          <Route exact path='/Signuppage' element={<Signuppage />}></Route>
          <Route exact path='/Loginpage' element={<Loginpage />}></Route>

          {/* adding missing */}
          <Route exact path='/croppage/:id' element={<CropPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
