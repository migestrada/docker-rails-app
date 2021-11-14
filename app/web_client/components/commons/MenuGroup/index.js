import React from 'react';
// Material
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
// Project
import Menu from './Menu';
import { allMenus, allSubMenus } from './menuList'

const MenuGroup = props => {
  const {
    open,
    onClose
  } = props

  return (
    <Drawer
      open={Boolean(open)}
      onClose={onClose}
    >
      <List
        sx={{ minWidth: '200px', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Navegacion
          </ListSubheader>
        }
      >
        {
          allMenus.map(menu => {
            const subMenus = allSubMenus.filter(subMenu => subMenu.menuName === menu.label)
            return <Menu key={menu.path || menu.label} subMenus={subMenus} menu={menu} />
          })
        }
      </List>
    </Drawer>
  )
};

export default MenuGroup;