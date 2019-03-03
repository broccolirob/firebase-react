import React, { Component } from 'react';
import { Grid, Segment, Menu, Header } from 'semantic-ui-react';
import AddPostForm from './AddPostForm';
import { UserContext } from '../providers/UserProvider';

class AddPostLayout extends Component {
  state = { activeItem: 'link' };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={11}>
            <Header as="h1">Submit a New Article</Header>
            <Menu pointing secondary>
              <Menu.Item
                name="link"
                active={activeItem === 'link'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="post"
                active={activeItem === 'post'}
                onClick={this.handleItemClick}
              />
              <Menu.Menu position="right">
                <Menu.Item
                  name="drafts"
                  active={activeItem === 'drafts'}
                  onClick={this.handleItemClick}
                />
              </Menu.Menu>
            </Menu>
            <Segment>
              {activeItem === 'drafts' ? (
                <div>Draft View</div>
              ) : (
                <UserContext.Consumer>
                  {user => (
                    <AddPostForm
                      type={activeItem}
                      channel={''}
                      title={''}
                      url={''}
                      text={''}
                      currentUser={user}
                    />
                  )}
                </UserContext.Consumer>
              )}
            </Segment>
          </Grid.Column>
          <Grid.Column width={5}>
            <Segment>
              <h3>Rules and Policy</h3>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default AddPostLayout;
