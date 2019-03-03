import React from 'react';
import { Button, Icon, Label, Table, Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { getChannelImg } from '../utils';

const Article = ({
  title,
  type,
  url,
  text,
  active,
  channel,
  commentCount,
  createdAt,
  rank,
  voteCount,
  author,
  id,
}) => {
  const displayCorrectRibbon = () => {
    if (rank === 1) {
      return <Label ribbon icon="trophy" color="yellow" />;
    } else {
      const icon = type === 'link' ? 'linkify' : 'bullhorn';
      return <Label ribbon icon={icon} basic />;
    }
  };

  const displayCorrectLink = () => {
    if (type === 'link') {
      return (
        <Item.Header as="a" href={url} target="_blank">
          {title}
        </Item.Header>
      );
    } else {
      return (
        <Item.Header as={Link} to={`/${id}`}>
          {title}
        </Item.Header>
      );
    }
  };

  return (
    <Table.Row>
      <Table.Cell collapsing>{displayCorrectRibbon()}</Table.Cell>
      <Table.Cell>
        <Item.Group>
          <Item>
            <Item.Content>
              {displayCorrectLink()}
              <Item.Meta>
                <Label size="small" as="a" basic image>
                  <img src={getChannelImg(channel)} alt={channel} />
                  {channel}
                </Label>
                {' - '}
                Posted by{' '}
                <Link to={`/${author.uid}`}>@{author.displayName}</Link>
                {' - '}
                {moment(createdAt.toDate()).fromNow()}
              </Item.Meta>
              {type === 'link' && url ? (
                <Item.Description>({url})</Item.Description>
              ) : null}
              <Item.Extra>
                <Button as="div" labelPosition="right">
                  <Button size="mini">
                    <Icon name="chevron up" />
                    Upvote
                  </Button>
                  <Label pointing="left">{voteCount}</Label>
                </Button>
                <Button as="div" labelPosition="right">
                  <Button size="mini" basic>
                    <Icon name="comment outline" />
                    Comment
                  </Button>
                  <Label pointing="left" basic>
                    {commentCount}
                  </Label>
                </Button>
                <Button
                  icon="dollar sign"
                  content="Give Tip"
                  size="mini"
                  basic
                />
                <Button icon="plus" content="Save" size="mini" basic />
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
  );
};

export default Article;
