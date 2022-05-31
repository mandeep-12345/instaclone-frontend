import React from 'react';
import Postview from './Postview';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import LandingPage from './Landing';
import Upload from './Upload';

const App = () => {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path ='/Postview' element={<Postview/>}/>
      <Route path ='/Upload' element={<Upload/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
