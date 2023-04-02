import React from 'react';
import Aside from "./Aside/Aside";
import {ToastContainer} from "react-toastify"
import HomeContent from "./HomeContent/HomeContent";
import "./home.scss"

const Home = () => {
    return (
        <section className="home">
            <div className="container">
                <Aside/>
                <HomeContent/>
                <ToastContainer/>
            </div>
        </section>
    );
};

export default Home;