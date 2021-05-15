import React from 'react'
import Header from "./components/Header";
import './app.css'
import Footer from "./components/Footer";
import Home from "./pages/Home";
import useApp from "./hooks/useApp";
import Product from './pages/Product'
import {Route, Switch, useHistory} from 'react-router-dom'
import Cart from './pages/Cart'
import {useSelector} from "react-redux";
import AuthPage from "./pages/Auth";
import CategoryProduct from "./pages/CategoryProduct";
import Account from "./pages/Account";
import Spinner from "./components/Spinner";

function App() {
  const width = useApp()
  const isAuth = useSelector(state => state.user.isAuth)
  const authType = useSelector(state => state.user.authType)
  const {location} =  useHistory()

  if (isAuth === false) {
    return <Spinner />
  }

  return (
    <div className={'app'}>
      <Header/>
      <Switch>
        <Route exact path={'/'} component={Home}/>
        <Route exact path={'/product/:urlKey'} component={Product}/>
        <Route exact path={'/cart'} component={Cart}/>
        {width < 800 && !isAuth && <Route exact path={'/auth'} component={AuthPage}/>}
        <Route path={'/category'} component={CategoryProduct}/>
        {isAuth && <Route path={'/account'}  component={Account}/>}
      </Switch>
      {width > 800 && !isAuth && authType && <AuthPage/>}
      <Footer/>
    </div>
  );
}

export default App;


