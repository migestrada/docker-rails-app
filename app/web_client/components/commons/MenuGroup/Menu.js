import React, { useState } from 'react';
// Material
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
// Icons
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';

const Menu = props => {
  const {
    key,
    menu,
    subMenus = []
  } = props;

  const [open, setOpen] = useState(false)

  const toggleOpen = () => setOpen(!open)

  const hasSubMenus = subMenus.length > 0;

  return <React.Fragment>
    <ListItemButton key={key} onClick={hasSubMenus ? toggleOpen : undefined}>
      {
        menu.icon && 
        <ListItemIcon>
          { menu.icon }
        </ListItemIcon>
      }
      <ListItemText primary={menu.label} />
      {
        hasSubMenus ? (open ? <ExpandLess /> : <ExpandMore />) : false }
    </ListItemButton>
    <Collapse in={open}>
      <Divider />
      <List component="div" disablePadding>
        {
          subMenus.map(subMenu => 
            <ListItemButton
              key={subMenu.path || subMenu.label}
              sx={{ pl: 4 }}
              onClick={subMenu.onClick}
            >
              <ListItemText primary={subMenu.label} />
            </ListItemButton>
          )
        }
      </List>
    </Collapse>
  </React.Fragment>
};

export default Menu;
