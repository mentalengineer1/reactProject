import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/img/img1.svg";
import Comman from './comman';


const Home = () => {
    return (
        <>
         <Comman name="Grow your business with"
          imgsrc={web}
           visit="/service"
            btname="Get Started" />
        </>
    );
}

export default Home;