import React from "react";
import tyre_types from '../../assets/images/tyre_types.jpg'
import tyre_speed_effect from '../../assets/images/tyre_speed_effect.jpg'
import race_strat from '../../assets/images/racing_strategies3.jpg'
import tyre_tread_comp from '../../assets/images/tyre-tread-comp.jpg'

export default function HeroLayout(){
    return(
        <div className="grid-item border 1px solid black">

            <div className="card-container">
                <div className="card">
                    <img src={tyre_types} className="card-img-size" alt="Tyre Xpert"/>
                    <h6 className="card-font-size">Tyre Types</h6>
                </div>

                <div className="card">
                    <img src={tyre_speed_effect} className="card-img-size" alt="Tyre Xpert"/>
                    <h6 className="card-font-size">Tyre type effect on speed</h6>
                </div>

                <div className="card">
                    <img src={race_strat} className="card-img-size" alt="Tyre Xpert"/>
                    <h6 className="card-font-size">Racing Strategies</h6>
                </div>

                <div className="card">
                    <img src={tyre_tread_comp} className="card-img-size" alt="Tyre Xpert"/>
                    <h6 className="card-font-size">Tyre Tread comparison</h6>
                </div>

            </div>
        </div> 
    )
}