import React from "react";
import {createRoutesFromElements, createBrowserRouter, Route, RouterProvider} from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import "./style.scss"


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>}>
            <Route
                path=""
                element={<Login/>}
            />
            <Route
                path="register"
                element={<Register/>}
            />
            <Route
                path="home"
                element={<Home/>}
            />
        </Route>
    )
);

function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
