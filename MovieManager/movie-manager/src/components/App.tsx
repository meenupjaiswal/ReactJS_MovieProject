import React from 'react';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import MovieDetails from './movie-details/MovieDetails';
import MovieTabs from './MovieTabs';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/moviedetails/:movieType/:movieTitle" element={<MovieDetails/>}></Route>                   
                    <Route path="/" element={<MovieTabs/>}></Route>
                </Routes>
            </BrowserRouter>
           
        </>
    );
};

export default App;