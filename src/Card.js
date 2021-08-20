import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/img/02.jpg"



const Card = () => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={web} className="card-card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">Card Title</h5>
                        <p className="card-text">
                            lorem loremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
                        </p>
                        <NavLink className="btn btn-primary" to="#">Go SomeWhere</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
