import React from 'react';
// Material
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// Icons
import AssignmentIcon from '@mui/icons-material/Assignment';

const createMenu = (icon, label, path) =>
  ({
    icon,
    label,
    path,
    onClick: path ? () => window.location.replace(path) : false
  })

const menus = [
  createMenu(<AssignmentIcon />, 'Facturas', '/invoices'),
]

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
        style={{ minWidth: '200px'}}
      >
        {
          menus.map(menu =>
            <ListItem
              button
              onClick={menu.onClick}
              key={menu.path || menu.label}
            >
              {
                menu.icon && 
                <ListItemIcon>
                  {menu.icon}
                </ListItemIcon>
              }
              <ListItemText primary={menu.label} />
            </ListItem>
          )
        }
      </List>
    </Drawer>
  )
};

export default MenuGroup;