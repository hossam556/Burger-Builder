import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngrediant = (name) =>{
    return {
        type : actionTypes.ADD_INGREDIANT ,
        ingrediantName :name 
    }
};

export const removeIngrediant = (name) =>{
    return {
        type : actionTypes.REMOVE_INGREDIANT ,
        ingrediantName :name 
    }
};

export const setIngrediants = (ingrediants)=>{
    return {
        type : actionTypes.SET_INGREDIANT ,
        ingrediants : ingrediants 
    }
};

export const fetchIngrediantsFailed = ()=> {
    return {
        type : actionTypes.FETCH_INGREDIANTS_FAILED
    }
}

export const initIngrediants = ()=> {
    return dispatch => {
        axios.get('https://react-my-burger-e6ef7.firebaseio.com/ingrediants.json').then(response=>{
           dispatch(setIngrediants(response.data))
        }).catch(error=>{
             dispatch(fetchIngrediantsFailed())
        })
    }
};