import {Component} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Player from './MediaPlayer';

const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}></Route>
                    <Route path="/player/*" element={<Player/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

