import React , {Component} from 'react';
import {connect} from 'react-redux';
import Aux from '../../hoc/auxilary/auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHnadler';
import * as actions from '../../store/actions/index';



class BurgerBuilder extends Component {
    state = {
        
        purchasing : false ,
        
    }

    componentDidMount(){
      this.props.onInitIngrediants();
    }

    updatePurchaseState = (ingrediants)=> {
        const sum = Object.keys(ingrediants).map(igkey=>{
            return ingrediants[igkey];
        }).reduce((sum, el)=>{
            return sum + el ;
        },0);
        return sum > 0 ;
    }

    

    purchaseHandler =()=>{
        if(this.props.isAuthenticated){
            this.setState({purchasing: true})
        }else {
            this.props.history.push('/auth')
        }
        
    }

    purchaseCancelHandler =()=> {
        this.setState({purchasing : false})
    }

    purchaseContinueHandler =() =>{
        this.props.onInitPurchase()
        this.props.history.push('/checkout');
    }

    render(){
        const disabledInfo = {
            ...this.props.ings
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0
        };
        
        let orderSummary = null;
        let burger = this.props.error ? <p>ingrediants can't be loaded</p> : <Spinner/>;

        if(this.props.ings){
            burger = (
            <Aux>

                <Burger ingrediants={this.props.ings} />
                <BuildControls 
                ingrediantAdded = {this.props.onIngrediantAdded}
                ingrediantRemoved = {this.props.onIngrediantRemoved}
                disabled = {disabledInfo}
                price={this.props.price}
                purchasable={this.updatePurchaseState(this.props.ings)}
                ordered={this.purchaseHandler}
                isAuth={this.props.isAuthenticated}/>
            </Aux>
            );
            orderSummary =<OrderSummary 
            ingrediants={this.props.ings}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinue={this.purchaseContinueHandler}
            price={this.props.price}/>;
        }
        
        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
              
            </Aux>

        );
    }
}

const mapStateToProps = state =>{
    return {
        ings : state.burgerBuilder.ingrediants ,
        price : state.burgerBuilder.totalPrice,
        error : state.burgerBuilder.error ,
        isAuthenticated : state.auth.token !==null
    }
};

const mapDispatchToProps = dispatch =>{
    return {
        onIngrediantAdded : (ingName) => dispatch(actions.addIngrediant(ingName)),
        onIngrediantRemoved : (ingName) => dispatch(actions.removeIngrediant(ingName)),
        onInitIngrediants : () => dispatch(actions.initIngrediants()),
        onInitPurchase : ()=> dispatch(actions.purchaseInit())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder,axios)) ;