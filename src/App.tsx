import React, { useEffect } from 'react';
import './App.css';
import Router from './Routing/Router';
import {  useSelector } from 'react-redux';
import {JobState} from './Components/interfaces'
import { CircularProgress } from '@mui/material';
function App() {
  const select = useSelector((state : JobState)=> state.jobs)

  

  return (
    <div>
      
     <Router />
    </div>
  );
}


export default App;
