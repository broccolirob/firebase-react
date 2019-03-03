import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  Table,
  Item,
  Label,
  Button,
  Icon,
  Dropdown,
  Menu,
} from 'semantic-ui-react';
import nba from '../nba.png';
import { ArticleContext } from '../providers/ArticleProvider';
import Article from './Article';
import { getChannelImg } from '../utils';

const PostFeed = () => {
  const articles = useContext(ArticleContext);

  const sortOptions = [
    { text: 'Top Rank', value: 'top', icon: 'bolt' },
    { text: 'Freshest', value: 'new', icon: 'bath' },
    { text: 'Greatest Hits', value: 'best', icon: 'chess king' },
  ];

  const channelOptions = [
    { text: 'MLB', value: 'mlb', key: 'mlb' },
    { text: 'NFL', value: 'nfl', key: 'nfl' },
    { text: 'NHL', value: 'nhl', key: 'nhl' },
    { text: 'EPL', value: 'epl', key: 'epl' },
    { text: 'NBA', value: 'nba', key: 'nba' },
  ];

  const renderLabel = label => ({
    basic: true,
    content: `${label.text}`,
    size: 'tiny',
    style: { padding: '2px', paddingRight: '5px' },
    image: { src: getChannelImg(label.text), size: 'mini', inline: true },
  });

  return (
    <React.Fragment>
      <Menu pointing secondary>
        <Menu.Item name="Articles" active as="a" />
        <Menu.Item name="Team Stocks" as="a" />
        <Menu.Item name="IPO List" as="a" />
        <Menu.Item name="Schedule" as="a" />
        <Menu.Menu position="right">
          <Menu.Item name="Save Filter" as="a" />
        </Menu.Menu>
      </Menu>
      <Dropdown
        placeholder="Filter by league"
        fluid
        multiple
        search
        selection
        clearable
        noResultsMessage={"We've given you all we can give, Captain ⚓️"}
        renderLabel={renderLabel}
        options={channelOptions}
      />
      <Table table="small" compact="very">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan={2}>
              Sort by{' '}
              <Dropdown
                options={sortOptions}
                defaultValue={sortOptions[0].value}
                pointing="top"
                button
                compact
                basic
              />
              <Button
                floated="right"
                icon
                labelPosition="left"
                primary
                size="small"
                as={Link}
                to="/new-post"
              >
                <Icon name="edit" />
                New Post
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {articles.map(article => {
            return <Article {...article} key={article.id} />;
          })}

          <Table.Row>
            <Table.Cell collapsing>
              <Label ribbon icon="bullhorn" basic />
            </Table.Cell>
            <Table.Cell>
              <Item.Group>
                <Item>
                  <Item.Content>
                    <Item.Header as="a" href="http://espn.com" target="_blank">
                      Dear America, stop putting laugh tracks in your shows.
                    </Item.Header>
                    <Item.Meta>
                      <Label size="small" basic image>
                        <img src={nba} alt="nba" />
                        NBA
                      </Label>
                      {' - '}
                      Posted by @majorrosenbloom
                      {' - '}
                      12 hours ago
                    </Item.Meta>
                    <Item.Extra>
                      <Button as="div" labelPosition="right">
                        <Button size="mini" color="blue" basic disabled>
                          <Icon name="check" />
                          Upvote
                        </Button>
                        <Label pointing="left" color="blue" basic>
                          121
                        </Label>
                      </Button>
                      <Button as="div" labelPosition="right">
                        <Button size="mini" basic>
                          <Icon name="comment outline" />
                          Comment
                        </Button>
                        <Label pointing="left" basic>
                          91
                        </Label>
                      </Button>
                      <Button
                        icon="dollar sign"
                        content="Give Tip"
                        size="mini"
                        basic
                      />
                      <Button
                        icon="check"
                        content="Save"
                        size="mini"
                        basic
                        disabled
                      />
                      <Button icon="hide" content="Hide" size="mini" basic />
                      <Button
                        icon="flag outline"
                        content="Report"
                        size="mini"
                        basic
                      />
                    </Item.Extra>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </React.Fragment>
  );
};

export default PostFeed;
