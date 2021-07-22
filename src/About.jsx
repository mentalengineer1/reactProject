import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/img/img3.png";
import Comman from './comman';


const About = () => {
    return (
        <>
            <Comman name="Welcome to about page"
             imgsrc={web}
              visit="/contact"
               btname="Contact Now" />
        </>
    );
}

export default About;