//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { Route,BrowserRouter as Router,Routes} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageS = 15;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0) 
  const [mode, setmode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      }}
    return (
      <div>
      <Router>
      <NavBar mode={mode} toggleMode={toggleMode} />
      <LoadingBar
      height={3}
        color='#f3540f'
        progress={progress} />
      <div>
        <Routes>
        <Route exact path="/" element= {<News mode={mode} setProgress = {setProgress} apiKey={apiKey} key="general" pageSize={pageS} country="in" category="general" />} />
        <Route exact path="/entertainment" element= {<News mode={mode} setProgress = {setProgress} apiKey={apiKey} key="entertainment" pageSize={pageS} country="in" category="entertainment" />} />
        <Route exact path="/health" element= {<News mode={mode} setProgress = {setProgress} apiKey={apiKey} key="health" pageSize={pageS} country="in" category="health" />} />
        <Route exact path="/science" element= {<News mode={mode} setProgress = {setProgress} apiKey={apiKey} key="science" pageSize={pageS} country="in" category="science" />} />
        <Route exact path="/technology" element= {<News mode={mode} setProgress = {setProgress} apiKey={apiKey} key="technology" pageSize={pageS} country="in" category="technology" />} />
        <Route exact path="/sports" element= {<News mode={mode} setProgress = {setProgress} apiKey={apiKey} key="sports" pageSize={pageS} country="in" category="sports" />} />
        <Route exact path="/business" element= {<News mode={mode} setProgress = {setProgress} apiKey={apiKey} key="business" pageSize={pageS} country="in" category="business" />} />
        </Routes>
        </div>
      </Router>        
      </div>
    )
  }

  export default App;