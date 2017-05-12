import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var MediaQuery = require('react-responsive');
    return (
      <div className="App">
        <MediaQuery query='(min-device-width: 1224px)'>
          <div>Tienes un laptop o desktop</div>

          <MediaQuery query='(min-device-width: 1824px)'>
            <div>Tu pantalla es muy grande</div>
          </MediaQuery>

          <MediaQuery query='(max-width: 1224px)'>
            <div>Este tamaño es de tablet o smartphone</div>
          </MediaQuery>

        </MediaQuery>

        <MediaQuery query='(max-device-width: 1224px)'>
          <div>Tienes una tablet o smartphone</div>
        </MediaQuery>

        <MediaQuery query='(orientation: portrait)'>
          <div>Telefono vertical</div>
        </MediaQuery>

        <MediaQuery query='(orientation: landscape)'>
          <div>Voltea tu telefono, esta horizontal</div>
        </MediaQuery>

        <MediaQuery query='(min-resolution: 2dppx)'>
          <div>Tienes retina</div>
        </MediaQuery>

        <MediaQuery minDeviceWidth={400} component="ul">
          <li>Item 1</li>
          <li>Item 2</li>
        </MediaQuery>

        <section className="UltimasProp">
          <CasaTumb/>
          <CasaTumb/>
        </section>
      </div>
    );
  }
}

class CasaTumb extends Component {
  render() {
    return (
      <article className="CasaTumb">
        <h1>Se Vende</h1>
        <img src='/imagenes_app/test_1.jpeg' className="img-casastumb"/>
        <div>
          <h2>Casa Roble</h2>
          <h1>$825,000.00</h1>
          <h4>Recámaras:4</h4> <h4>Baños: 2.5</h4> <h4>Estacionamiento:2</h4>
        </div>
        <div>
          <h4>Calle Roble entre calle...</h4>
          <h3>Más Información</h3>
        </div>

      </article>
    )
  }
}


export default App;
