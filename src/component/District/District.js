import React from 'react';
import './District.css';
const District = (props) => {
    const {areaName, division,  established, flag, population ,travelCost, areaId}= props.district;
    // console.log(pr25ops);
    return (
        <div className='card border-0 py-3'>
            <div className="card district-container" >
                <img src={flag} alt="" className="w-75 mx-auto mt-2 rounded-3"/>
                <div className="card-body fw-bolder text-center">                   
                    <h5 className="card-title fw-bolder text-center">Name: {areaName}</h5>
                    <p className="card-text">Division: {division}</p>
                    <p className="card-text">Established: {established}</p>
                    <p className="card-text">Totol Population: {population}</p>
                    <p className="card-text">Travel Cost: {travelCost}</p>
                    <button 
                        onClick={()=>props.handleAddToCart(props.district)}
                        className='btn-success rounded p-2'>Add Destination
                    </button>                   
                </div>
            </div>
        </div>
    );
};

export default District;