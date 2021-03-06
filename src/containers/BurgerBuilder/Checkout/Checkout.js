import React ,{Component} from 'react';
import CheckoutSummary from '../../../components/order/CheckoutSummary/CheckoutSummary';
import {Route , Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import ContactData from './ContactData/ContactData';
import * as actions from '../../../store/actions/index';

class Checkout extends Component {
   

    checkoutCanceledHandler =()=>{
        this.props.history.goBack();
    }

    checkoutContinuedHandler =()=>{
        this.props.history.replace('/checkout/contact-data');
    }

   render(){
       let summary = <Redirect to='/'/>
       if(this.props.ings){
           const purchasedRedirect = this.props.purchased ? <Redirect to='/'/> : null ;
           summary = (
            <div>
            {purchasedRedirect}    
           <CheckoutSummary 
           ingrediants={this.props.ings}
           checkoutCanceled={this.checkoutCanceledHandler}
           checkoutContinued={this.checkoutContinuedHandler}/>
           <Route path={this.props.match.path + '/contact-data'} 
              component={ContactData}/>
           </div>)
       }
       return summary
   }
}

const mapStateToProps = state => {
    return {
        ings : state.burgerBuilder.ingrediants,
        purchased : state.order.purchased
    }
};


export default connect(mapStateToProps)(Checkout) ;