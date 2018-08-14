import React from 'react'
import { Image, Item } from 'semantic-ui-react'
import logo from './../logo.svg';
const ItemExampleItems = () => (
  <Item.Group>
    <Item>
      <Item.Image size='tiny' src={logo} />

      <Item.Content>
        <Item.Header as='a'>Header</Item.Header>
        <Item.Meta>Description</Item.Meta>
        <Item.Extra>Additional Details</Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='tiny' src={logo} />

      <Item.Content>
        <Item.Header as='a'>Header</Item.Header>
        <Item.Meta>Description</Item.Meta>
        <Item.Extra>Additional Details</Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
)

export default ItemExampleItems