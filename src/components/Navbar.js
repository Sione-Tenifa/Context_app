import React from 'react'
import { NavLink,} from 'react-router-dom'
import { Menu, } from 'semantic-ui-react'

const Navbar = () => (
  <Menu>
    <NavLink>
      <Menu.Item>
        Home
      </Menu.Item>
    </NavLink>
    <NavLink>
      <Menu.Item to="/account/profile">
        username
      </Menu.Item>
    </NavLink>
  </Menu>
)

export default Navbar; 