import React from 'react';
// Icons
import AssignmentIcon from '@mui/icons-material/Assignment';
import FolderIcon from '@mui/icons-material/Folder';

const objectMenu = (icon, label, path) => {
  return {
    icon,
    label,
    onClick: path ? () => window.location.replace(path) : undefined,
  }
}

const objectSubMenu = (label, path, menuName) => {
  return {
    label,
    menuName,
    onClick: path ? () => window.location.replace(path) : undefined
  }
}

export const allMenus = [
  objectMenu(<AssignmentIcon />, 'Facturas', '/invoices'),
  objectMenu(<FolderIcon />, 'Mantenedores', null)
]

export const allSubMenus = [
  objectSubMenu('Tallas', '/sizes', 'Mantenedores'),
].sort((a, b) => a.label - b.label)