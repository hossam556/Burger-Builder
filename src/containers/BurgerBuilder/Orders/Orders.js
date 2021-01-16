import React ,{Component} from 'react';
import {connect} from 'react-redux';
import Order from '../../../components/order/CheckoutSummary/order';
import axios from '../../../axios-orders';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHnadler';
import * as actions from '../../../store/actions/index';
import Spinner from '../../../components/UI/Spinner/Spinner';

class Orders extends Component {
    
    componentDidMount(){
        this.props.onFetchOrders(this.props.token)
    }

    
    render(){
        let orders = <Spinner/>
        if (!this.props.loading){
            orders = (
                this.props.orders.map(order=>(
                    <Order 
                    key={order.id}
                    ingrediants={order.ingrediants}
                    price={order.price}/>
                ))
            )
        }
        return(
            <div>
               {orders}
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        orders : state.order.orders,
        loading : state.order.loading,
        token : state.auth.token
        
    }
};

const mapDispatchToProps = dispatch =>{
    return {
        onFetchOrders : (token)=> dispatch(actions.fetchOrders(token))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Orders,axios))  ;