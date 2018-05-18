import React, { Component } from 'react';
import { Button, Dropdown, Menu } from 'semantic-ui-react'


class Toolbar extends Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    return (
      <Menu fixed ="top" inverted size='large'>
       <Menu.Item>
        </Menu.Item>
      <Menu.Item name='home' active={this.state.activeItem === 'home'} onClick={this.handleItemClick} />
      <Menu.Item name='messages' active={this.state.activeItem === 'messages'} onClick={this.handleItemClick} />

      <Menu.Menu position='right'>
        <Dropdown item text='Language'>
          <Dropdown.Menu>
            <Dropdown.Item>English</Dropdown.Item>
            <Dropdown.Item>Russian</Dropdown.Item>
            <Dropdown.Item>Spanish</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item>
          <Button primary>Sign Up</Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
    );
  }
}

export default Toolbar;
