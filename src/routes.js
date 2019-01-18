import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Home from './Home';
import BulkMail from './utilities/BulkMail'
import NameForm from './NameForm'
import EssayForm from './EssayForm'
import MultiForm from './MultiForm'
import Nav from './components/Nav/Nav'
import InputForm from './InputForm'
import FunctionGateway from './functiongateway'

 {/* https://stackoverflow.com/questions/45122800/react-router-switch-behavior */}
export const Routes = (props) => (
    <Router>
        <div className="App">
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/utilities/bulkmail" component={BulkMail} exact={true} />
          <Route path="/NameForm" component={NameForm} exact={true} />
          <Route path="/EssayForm" component={EssayForm} exact={true} />
          <Route path="/MultiForm" component={MultiForm} exact={true} />
          <Route path="/InputForm" component={InputForm} exact={true} />
          <Route path="/functiongateway" component={FunctionGateway} exact={true} />
          {/* <Route component={ Error404 } /> */}
          <Redirect to="/" />

        </Switch>
        </div>
      </Router>
        );
