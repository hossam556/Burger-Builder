import * as actionTypes from '../actions/actionTypes';

const inintialState = {
    ingrediants:null,
    totalPrice: 4 ,
    error : false 
};

const INGREDIANT_PRICES ={
    salad : 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const reducer = (state=inintialState ,action) => {
     switch(action.type){
        case actionTypes.ADD_INGREDIANT :
             return {
                 ...state ,
                 ingrediants :{
                       ...state.ingrediants ,
                       [action.ingrediantName] : state.ingrediants[action.ingrediantName] + 1
                 },
                 totalPrice : state.totalPrice + INGREDIANT_PRICES[action.ingrediantName],
             };
        case actionTypes.REMOVE_INGREDIANT :
             return {
                ...state ,
                ingrediants :{
                      ...state.ingrediants ,
                      [action.ingrediantName] : state.ingrediants[action.ingrediantName] - 1
                },
                totalPrice : state.totalPrice - INGREDIANT_PRICES[action.ingrediantName],
             };  
        case actionTypes.SET_INGREDIANT :
            return {
                ...state ,
                ingrediants : {
                    salad : action.ingrediants.salad ,
                    bacon : action.ingrediants.bacon ,
                    cheese : action.ingrediants.cheese ,
                    meat : action.ingrediants.meat ,
                } ,
                totalPrice : 4 ,
                error : false
            };
        case actionTypes.FETCH_INGREDIANTS_FAILED :
            return {
                ...state ,
                error : true
            };

        default :
         return state ;      
     }
};

export default reducer ;