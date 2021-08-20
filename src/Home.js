import React from "react";
import web from "../src/img/01.jpg"
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common
                name="Grow Your Business With"
                img={web}
                visit="/service"
                btnname="Get Started"
            />
        </>
    );
}

export default Home;
