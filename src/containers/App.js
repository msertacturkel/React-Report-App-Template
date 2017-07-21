import React, { Component } from 'react';
import '../static/styles/App.css';

import Header from '../components/Header';
import Filter from '../components/Filter';
import Reports from '../components/Reports';
import Main from '../components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="container">
              <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <Header/>
                  </div>
              </div>
              <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                      <Filter/>
                      <Reports/>
                      <br/>
                  </div>
              </div>
              <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <Main/>
                  </div>
              </div>
              <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"><br/></div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
