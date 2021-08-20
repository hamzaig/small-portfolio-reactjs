import React from "react";
import Common from "./Common";
import web from "../src/img/01.jpg"



const About = () => {
    return (
        <>
            <Common
                name="Welcome to About page"
                img={web}
                visit="/contact"
                btnname="Contact Now"
            />
        </>
    );
}

export default About;
