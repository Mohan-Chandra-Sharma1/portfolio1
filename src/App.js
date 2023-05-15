import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Body from './Components/Body/Body';
import ContextAppProvider from './ContextAPI';
// import './App.css';
import "./styles.css";
import AOS from 'aos';

function App() {
useEffect(() =>{
  AOS.init();
},[])

  return (
    <Router>
      <ContextAppProvider>
        <>
        <Body/>
        </>
      </ContextAppProvider>
    </Router>
  );
}

export default App;
