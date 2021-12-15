import React, { useEffect, useState } from 'react';
import District from '../District/District';
import TravelCart from '../TravelCart/TravelCart';

const Districts = () => {
    const [districts, setDistricts] = useState([]);
    const [travelCart, setTravelCart]= useState([]);
    useEffect(()=>{
        fetch('./districts.JSON')
        .then(res => res.json())
        .then(data=>{
            setDistricts(data);
        });
    },[])

    //Handle button click
    const handleAddToCart = (district =>{
        const newTravelCart = [...travelCart, district];
        setTravelCart(newTravelCart); //set data from child component
    })

    return (
        <div className="container px-4">
            <div className="row gx-5">
                <div className="col-md-12 col-lg-9">
                    <div className="p-3 border bg-light">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                                {
                                    districts.map(district => <District
                                        key={district.areaId} 
                                        district={district}
                                        handleAddToCart = {handleAddToCart}>
                                    </District>)
                                }
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-3">
                    <div className="p-3 border bg-light">
                        <TravelCart travelCart = {travelCart}></TravelCart>
                    </div>
                </div>
            </div>
      </div>
    );
};

export default Districts;