import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import TopNavBar from './TopNavBar';
import Dashboard from './Dashboard';
import Summary from './Summary.js';
import LoginView from './authentication/LoginView';
import SignupView from './authentication/SignupView';
import ProtectedRoute from './routing/ProtectedRoute';
import AddPostLayout from './AddPostLayout';

const Application = () => {
  return (
    <Router>
      <main style={{ paddingTop: '100px' }}>
        <TopNavBar />
        <Container>
          <Switch>
            <Route exact path="/" component={Summary} />
            <Route path="/login" component={LoginView} />
            <Route path="/new-post" component={AddPostLayout} />
            <Route path="/signup" component={SignupView} />
            <ProtectedRoute path="/:userId" component={Dashboard} />
          </Switch>
        </Container>
      </main>
    </Router>
  );
};

export default Application;
