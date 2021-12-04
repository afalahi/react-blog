import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, GridRow, GridColumn, Item } from 'semantic-ui-react';

import { fetchPosts } from '../actions';

const PostsList = ({ fetchPosts, posts }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const PostList = () =>
    posts.map(post => {
      return (
        <Item key={post.id}>
          <Item.Content>
            <i className='large middle aligned icon user' />
            <Item.Header>
              <strong>{post.title}</strong>
            </Item.Header>
            <Item.Extra>{post.body}</Item.Extra>
          </Item.Content>
        </Item>
      );
    });
  return (
    <Container>
      <GridRow>
        <GridColumn width='3'>
          <Item.Group divided relaxed>
            <PostList />
          </Item.Group>
        </GridColumn>
      </GridRow>
    </Container>
  );
};
const mapStateToProps = state => {
  const { posts } = state;
  return { posts };
};
export default connect(mapStateToProps, { fetchPosts })(PostsList);
