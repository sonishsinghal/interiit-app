import "./App.css";
import Graph from "./components/Graph";
import Details from "./components/Details";
import FileUpload from "./components/FileUpload";

import React, { useState, useEffect } from 'react'




function App() {
  const [values, setvalues] = useState({})
  const [uploaded, setuploaded] = useState(false)

  return (
    <div className="App" >
      <div className="container" style={{minHeight:"100vh"}}>
      {uploaded ? 
      <div
        className="container"
        style={{
          height: "80vh",
          width: "80vw",
        }}
      > 
        
          <Graph values = {values}></Graph>
          
      </div>
      :
      <div style={{height : "20vh"}}/>
    }


      <div className="container">
        <div className="container mt-4">
          <h4 className="display-6 text-center mb-4">
            <i className="fab fa-react" /> Upload Your File (any random file)
          </h4>
          
          <FileUpload setvalues = {setvalues} setuploaded = {setuploaded}/>
        </div>
      </div>

        {uploaded ? 
      <div className="container">
        <Details values = {values}></Details>
      </div>
      : 
      <div/>
        }
      


      </div>
    </div>
  );
}

export default App;
