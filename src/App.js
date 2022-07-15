import {Component} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './page/Main';
import Watch from './page/Watch';
import Redux from './redux/components/Counter'

const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}></Route>
                    <Route path="/watch/*" element={<Watch/>}></Route>
                    <Route path="/redux/*" element={<Redux/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

