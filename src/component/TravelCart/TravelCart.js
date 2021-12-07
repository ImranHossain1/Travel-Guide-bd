import React from 'react';
import './TravelCart.css';
const TravelCart = (props) => {
    // console.log(props.travelCart)
    const {travelCart} = props;
    let total = 0;
    for ( const destination of travelCart){
        total = total + destination.travelCost;
    }
    return (
        <div>
            <h4>Travel summary</h4>
            <h4>Destination Added : <span>{travelCart.length}</span></h4>
            <h4>Total cost: <span>{total}</span></h4>
        </div>
    );
};

export default TravelCart;