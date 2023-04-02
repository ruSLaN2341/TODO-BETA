import React from 'react';
import Header from "./Header/Header";

const Loyout = () => {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </>
    );
};

export default Loyout;