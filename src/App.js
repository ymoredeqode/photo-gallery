import './App.css';
import React, {useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import UploadForm from './Images/UploadForm';
import ImageGrid from './Images/ImageGrid';
import Modal from './Images/Modal';
import Home from './Home';
import Jumbotron from './Components/jumbotron';


function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (

    <Router>

    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
       <Link className="navbar-brand" to="/">Deqode</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
         
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Images</a>
            <div className="dropdown-menu" aria-labelledby="dropdown01">
              <Link className="dropdown-item" to="/upload-image">Upload</Link>
              <Link className="dropdown-item" to="/image-grid">Image Grid</Link>

              

            </div>
          </li>
        </ul>
      </div>
    </nav>


    <main role="main">


        <Switch>
          <Route exact path="/">
            <Home/> 
          </Route>

          <Route exact path="/upload-image">
            <Jumbotron  title="Image" desc="" />
            <div className="container">
              <UploadForm />
              <ImageGrid setSelectedImg={setSelectedImg}/>
              {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
            </div>
          </Route>

          <Route exact path="/image-grid">
            <Jumbotron  title="Image" desc="" />
            <div className="container">
              <ImageGrid setSelectedImg={setSelectedImg}/>
              {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
            </div>
          </Route>

          


        </Switch>

      </main>
    </Router>
    

  );
}






export default App;
