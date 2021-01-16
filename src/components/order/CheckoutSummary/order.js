import React from 'react';
import classes from './order.module.css';

const order =(props)=>{
    const ingrediants = [];

    for(let ingrediantName in props.ingrediants){
        ingrediants.push({
            name :ingrediantName,
            amount: props.ingrediants[ingrediantName]
        })
    }

    let ingrediantsOutput = ingrediants.map(ig=>{
        return <span 
        style={{
            textTransform:'capitalize',
            display:'inline-block',
            margin: '0 8px',
            border: '1px solid #ccc',
            padding: '5px'
        }}
        key={ig.name}>{ig.name} ({ig.amount})</span>
    })
    return(
        <div className={classes.Order}>
        <p>ingrediants : {ingrediantsOutput}</p>
        <p>Price: USD {Number.parseFloat(props.price).toFixed(2)}</p>
    </div>
    )
    
}
    

export default order;