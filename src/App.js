import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/BurgerBuilder/Checkout/Checkout';
import {Route,Switch} from 'react-router-dom';
import Burger from './components/Burger/Burger';
import Orders from './containers/BurgerBuilder/Orders/Orders';
import Auth  from './containers/BurgerBuilder/Auth/Auth';
import Logout  from './containers/BurgerBuilder/Auth/Logout/Logout';



class App extends Component {
  render(){
    return (
      <div >
        <Layout>
         <Switch>
           <Route path='/checkout' component={Checkout}/>          
           <Route path='/orders' component={Orders}/>
           <Route path='/auth'  component={Auth}/>
           <Route path='/logout'  component={Logout}/>
           <Route path='/' exact component={BurgerBuilder}/>
         </Switch>
        </Layout>
      </div>
    );
  }
 
}

export default App;
