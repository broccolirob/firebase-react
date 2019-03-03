import React from 'react';
import {
  Grid,
  Segment,
  Menu,
  Header,
  Icon,
  Input,
  Table,
  Label,
  List,
  Item,
  Image,
} from 'semantic-ui-react';
import PostFeed from './PostFeed';
import discuss from '../discuss.png';
import sportsCluster from '../sportsCluster.png';
import coin from '../coin.png';

const Summary = () => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={11}>
          <PostFeed />
        </Grid.Column>
        <Grid.Column width={5}>
          <Segment attached="top">
            <Header as="h3">
              Welcome to 0xSports!{' '}
              <span role="img" style={{ float: 'right' }}>
                👋🎉
              </span>
            </Header>
            <Item.Group>
              <Item>
                <Item.Image
                  size="tiny"
                  src={sportsCluster}
                  atl="connected users"
                />
                <Item.Content>
                  <Header as="h5">
                    <span>Fantasy Sports Game</span>
                    <Header.Subheader>
                      The stock market game for sports! Buy and sell shares of
                      your favorite teams.
                    </Header.Subheader>
                  </Header>
                </Item.Content>
              </Item>
              <Item>
                <Item.Image
                  size="tiny"
                  src={discuss}
                  alt="bowling ball and pin"
                />
                <Item.Content>
                  <Header as="h5">
                    <span>Community-curated Articles</span>
                    <Header.Subheader>
                      Share links and ideas with the community! The latest
                      articles with the most upvotes rise to the top.
                    </Header.Subheader>
                  </Header>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
          <Menu attached="bottom" widths={2}>
            <Menu.Item as="a" className="sidebar-links">
              Learn More
            </Menu.Item>
            <Menu.Item as="a" className="sidebar-links">
              Help Page
            </Menu.Item>
          </Menu>

          <Menu attached="top" borderless>
            <Menu.Item header>
              <Icon name="ethereum" /> Ethereum
            </Menu.Item>
          </Menu>
          <Segment attached>
            <Header as="h6" style={{ marginBottom: '5px' }}>
              Your Current Address
            </Header>
            <Input
              action={{ icon: 'copy' }}
              value={'0x5233aF283E7C359a1011Dc0ff480298E90c8CFd6'}
              fluid
            />
            <Label pointing="above" color="olive">
              Metamask
            </Label>
            <Header as="h5" floated="right" style={{ paddingTop: '7px' }}>
              <Image src={coin} alt="coin" size="mini" />
              <Header.Content>
                Deposited Balance
                <Header.Subheader>32.7231</Header.Subheader>
              </Header.Content>
            </Header>
          </Segment>
          <Menu attached="bottom" widths={1}>
            <Menu.Item as="a" className="sidebar-links">
              Manage Assets
            </Menu.Item>
          </Menu>

          <Menu attached="top" borderless>
            <Menu.Item header>
              <Icon name="pencil" /> Latest Posts
            </Menu.Item>
          </Menu>
          <Segment attached>
            <Table>
              <Table.Body>
                <Table.Row>
                  <Table.Cell collapsing>
                    <Header as="h5">
                      Michael Jordan was the greatest bas...
                      <Header.Subheader>
                        posted by @anotherballer
                      </Header.Subheader>
                    </Header>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell collapsing>
                    <Header as="h5">
                      The Atlanta Braves are a shadow of...
                      <Header.Subheader>
                        posted by @newideas1111
                      </Header.Subheader>
                    </Header>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell collapsing>
                    <Header as="h5">
                      Top paid quarterbacks don't make it...
                      <Header.Subheader>
                        posted by @yellownoblue
                      </Header.Subheader>
                    </Header>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell collapsing>
                    <Header as="h5">
                      How many woodchucks would a wood chu...
                      <Header.Subheader>posted by @rschn4911</Header.Subheader>
                    </Header>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell collapsing>
                    <Header as="h5">
                      This years super bowl was kind of boring
                      <Header.Subheader>
                        posted by @anotherballer
                      </Header.Subheader>
                    </Header>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Segment>
          <Segment textAlign="center" attached="top">
            <List bulleted horizontal>
              <List.Item as="a">Home</List.Item>
              <List.Item as="a">About</List.Item>
              <List.Item as="a">Contact</List.Item>
              <List.Item as="a">Help</List.Item>
              <List.Item as="a">Blog</List.Item>
              <List.Item as="a">Content Policy</List.Item>
              <List.Item as="a">Terms of Service</List.Item>
            </List>
            <Header as="h5">
              &copy; 2019 SportsReddit. All rights reserved. 🔥
            </Header>
          </Segment>
          <Menu attached="bottom" widths={1} inverted color="blue">
            <Menu.Item as="a">Scroll to Top</Menu.Item>
          </Menu>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Summary;
