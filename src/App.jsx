import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import UserContext from './context/UserContext';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Error from './components/Error';
import ProductDetails from './components/ProductDetails';
import Profile from './components/Profile';
import { Provider } from 'react-redux';
import Store from './redux/Store';
import WishList from './components/WishList';
import Checkout from './components/Checkout';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';
import ThankYou from './components/Thankyou';
import Shop from './components/Shop';
import Blog from './components/Blog';
import ContactPage from './components/ContactPage';

export default function App() {

  return (
        <UserContext>
          <Provider store={Store}>
            <BrowserRouter>
              <div>
                <Header />
              </div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/shop' element={<Shop />} />
                <Route path="/shopping-cart" element={<ShoppingCart />} />
                <Route path="/blog" element={<Blog />} />
                <Route path='/aboutus' element={<AboutPage />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/wishlist' element={<WishList />} />
                <Route path='/productdetails/:id' element={<ProductDetails />} />
                <Route path='/login' element={<Login />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='*' element={<Error />} />
                <Route path="/thankyou" element={<ThankYou />} />
              </Routes>
              <div>
                <Footer />
              </div>
            </BrowserRouter>
          </Provider>
        </UserContext>

  )
}
