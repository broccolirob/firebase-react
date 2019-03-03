import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  Button,
  Dropdown,
  Container,
  Search,
  Label,
  Icon,
} from 'semantic-ui-react';
import { auth } from '../firebase';
import { UserContext } from '../providers/UserProvider';
import bearLogo from '../bearLogo.png';

const LoggedOutView = () => {
  return (
    <React.Fragment>
      <Menu.Item>
        <Button.Group>
          <Button as={Link} to="/login">
            Login
          </Button>
          <Button.Or />
          <Button as={Link} to="/signup" primary>
            Signup
          </Button>
        </Button.Group>
      </Menu.Item>
    </React.Fragment>
  );
};

const LoggedInView = user => {
  const logout = () => auth.signOut();

  const trigger = (
    <span>
      <Icon name="user outline" />
    </span>
  );

  return (
    <React.Fragment>
      <Label
        color="olive"
        circular
        empty
        style={{ position: 'relative', top: '15px', left: '15px' }}
      />
      <Dropdown trigger={trigger} pointing="top right" floating item labeled>
        <Dropdown.Menu as={Menu}>
          <Dropdown.Item
            text={
              <span>
                Signed in as <strong>{user.displayName}</strong>
              </span>
            }
            disabled
          />
          <Dropdown.Item icon="home" text="Home" as={Link} to="/" />
          <Dropdown.Item
            icon="user outline"
            text="User Dashboard"
            as={Link}
            to={`/${user.uid}`}
            label={{
              color: 'olive',
              empty: true,
              circular: true,
              floating: true,
              style: { top: '11px' },
            }}
          />
          <Dropdown.Item icon="settings" text="Settings" />
          <Dropdown.Item icon="beer" text="About" />
          <Dropdown.Item icon="help" text="Help" />
          <Dropdown.Divider />
          <Dropdown.Item>
            <Button as={Link} to="/new-post" size="mini" primary fluid basic>
              <Icon name="edit" />
              New Post
            </Button>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item icon="sign-out" text="Log out" onClick={logout} />
        </Dropdown.Menu>
      </Dropdown>
    </React.Fragment>
  );
};

const TopNavBar = () => {
  const user = useContext(UserContext);

  return (
    <Menu size="large" borderless fixed="top">
      <Container>
        <Menu.Item as={Link} to="/" header>
          <img src={bearLogo} alt="Logo of a bear" />
        </Menu.Item>
        <Menu.Item>
          <Search icon="search" placeholder="Search..." />
        </Menu.Item>
        <Menu.Menu position="right">
          {user ? LoggedInView(user) : LoggedOutView()}
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default TopNavBar;
