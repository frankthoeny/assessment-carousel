import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, NavLink as Link, Route } from 'react-router-dom'
import './sass/normalize.scss'
import './sass/bootstrap-scss/bootstrap.scss'
import App from './app'

// Class App component
class Index extends Component {

    constructor( props ) {
        super( props );
    }

    render() {
        return(
          <BrowserRouter>
             <>
                <Switch>
                  <Route exact path="/" component={ App } />
                </Switch>
              </>
           </BrowserRouter>
        );
     }
 }

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
