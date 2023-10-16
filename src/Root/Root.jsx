import React from 'react'

import { GlobalStyle } from "../styles/GlobalStyle";

import AppRoutes from "../Routes/Routes";
import Header from "../components/templates/Header/Header";
import Footer from "../components/templates/Footer/Footer";
import Sidebar from "../components/templates/Sidebar/Sidebar";

const Root = () => {
    return (
        <>
            <GlobalStyle/>
            <div className="app">
                <Header/>

                <div className="container">
                    <Sidebar/>
                    <AppRoutes/>
                </div>

                <Footer/>
            </div>
        </>
    )
}
export default Root
