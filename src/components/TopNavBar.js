import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button, Container } from 'semantic-ui-react';
import { auth } from '../firebase';
import { UserContext } from '../providers/UserProvider';

const LoggedOutView = () => {
  return (
    <React.Fragment>
      <Menu.Item>
        <Button primary as={Link} to="/signup">
          Sign up
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button as={Link} to="/login">
          Log in
        </Button>
      </Menu.Item>
    </React.Fragment>
  );
};

const LoggedInView = () => {
  const logout = () => auth.signOut();
  return (
    <Menu.Item>
      <Button onClick={logout}>Log out</Button>
    </Menu.Item>
  );
};

const TopNavBar = () => {
  const user = useContext(UserContext);

  return (
    <Menu borderless>
      <Container>
        <Menu.Item name="home" as={Link} to="/">
          Home
        </Menu.Item>
        <Menu.Menu position="right">
          {user ? LoggedInView() : LoggedOutView()}
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default TopNavBar;
