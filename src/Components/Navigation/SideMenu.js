import React from 'react'
import { Input, Label, Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

const sideMenu  = () =>{
    return (
      
        <Menu  vertical>
        <NavLink to = "/" exact ="/" >
        <Menu.Item name='inbox'>
          <Label color='teal'>500</Label>
            Post
          </Menu.Item>
        </NavLink>

        <NavLink to = "/users" exact ="/" >
        <Menu.Item name='spam'>
          <Label>10</Label>
          User
        </Menu.Item>
        </NavLink>

        <NavLink to = "/users" exact ="/" >
        <Menu.Item name='spam'>
          <Label>10</Label>
          Album
        </Menu.Item>
        </NavLink>


        <Menu.Item>
          <Input icon='search' placeholder='Search mail...' />
        </Menu.Item>
      </Menu>
    ) 
}

export default sideMenu;