import React from "react";
import {Routes, Route , BrowserRouter} from 'react-router-dom'

import Home from "./Pages/Home";
import Projetos from "./Pages/Projetos";
import Sobre from "./Pages/Sobre/";
import Contatos from "./Pages/Contatos/";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/Sobre' element={<Sobre/>}/>
                <Route path='/Projetos' element={<Projetos/>}/>
                <Route path='/Contatos' element={<Contatos/>}/>
            </Routes>
        </BrowserRouter>
    );
}