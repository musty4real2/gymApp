import React from 'react';
import { Route, Routes } from "react-router-dom";
import {Box} from '@mui/material';
import './App.css';
import Home from './pages/Home';
import Exercisedetail from './pages/Exercisedetail';
import Navbar from './components/Navbar';
const App = () => {
return (
    <Box width='400px'>
        <NavBar />
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/exercise/:id/' element={ <ExerciseDetail /> } />
        </Routes>
    </Box>
)
}

export default App