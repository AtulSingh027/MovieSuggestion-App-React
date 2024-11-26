import React, { useState } from 'react';
import { BrowserRouter , Route ,Routes } from 'react-router-dom';

import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Movies from './Pages/Movies'
import MovieDetails from './Pages/MovieDetails'

export default function App()
{
  let [selectedMovies,setSelectedMovies] = useState(null);

  return(
    <BrowserRouter>

    <Navbar/>
    
    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/Movies' element ={<Movies setSelectedMovies = {setSelectedMovies} />}/>
      <Route path='/MovieDetails' element ={<MovieDetails selectedMovies = {selectedMovies} />}/>
    </Routes>
    
    </BrowserRouter>
  )
}

