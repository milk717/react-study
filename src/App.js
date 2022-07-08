import {Component} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './page/Main';
import Watch from './page/Watch';

const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}></Route>
                    <Route path="/watch/*" element={<Watch/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

