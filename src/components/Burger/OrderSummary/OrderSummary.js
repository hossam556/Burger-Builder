import React,  {Component} from 'react';
import Aux from '../../../hoc/auxilary/auxilary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component  {
    //this could be a fnc component

    componentDidUpdate(){
        console.log('helloo')
    }
    render(){
        const ingrediantSummary =Object.keys(this.props.ingrediants ).map(igkey=>{
            return (
            <li key={igkey}>
                <span style={{textTransform: 'capitalize'}}>{igkey}</span> : {this.props.ingrediants[igkey]}
            </li>)
            }); 

        return(
            <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingrediants:</p>
            <ul>
               {ingrediantSummary}
            </ul>
            <p>Continue To Checkout?</p>
            <p><strong>Total Price : {this.props.price.toFixed(2)}</strong></p>
            <Button btnType='Danger' clicked={this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType='Success' clicked={this.props.purchaseContinue}>CONTINUE</Button>
        </Aux>
        )
    }
};

export default OrderSummary ;
