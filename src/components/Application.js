import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import { firestore, auth } from '../firebase';
import TopNavBar from './TopNavBar';
import Login from './Login';
import Signup from './Signup';
import { collectIdsAndData } from '../utils';

class Application extends Component {
  state = { todos: [] };

  unsubscribeFromTodos = null;

  componentWillMount = async () => {
    this.unsubscribeFromTodos = firestore
      .collection('todos')
      .onSnapshot(snapshot => {
        const todos = snapshot.docs.map(collectIdsAndData);
        this.setState({ todos });
      });
  };

  componentWillUnmount() {
    this.unsubscribeFromTodos();
  }

  render() {
    return (
      <Router>
        <main>
          <TopNavBar />
          <Container>
            <Switch>
              <Route
                exact
                path="/"
                component={() => <h3>I Am the HOME route. User</h3>}
              />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
            </Switch>
          </Container>
        </main>
      </Router>
    );
  }
}

export default Application;
