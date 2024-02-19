import React, { Component, Fragment } from 'react'
import '../src/assets/css/fontawesome.css';
import '../src/assets/css/custom.css';
import {BrowserRouter} from 'react-router-dom';
import AppRoute from "./routes/AppRoute";

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <AppRoute />
        </BrowserRouter>

      </Fragment>
    )
  }
}

export default App