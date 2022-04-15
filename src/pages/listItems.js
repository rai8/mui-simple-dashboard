import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import DashboardIcon from '@material-ui/icons/Dashboard'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PeopleIcon from '@material-ui/icons/People'
import BarChartIcon from '@material-ui/icons/BarChart'
import LayersIcon from '@material-ui/icons/Layers'
import AssignmentIcon from '@material-ui/icons/Assignment'
import { Link } from 'react-router-dom'
export const mainListItems = (
  // <div>
  //   <ListItem button>
  //     <ListItemIcon>
  //       <DashboardIcon />
  //     </ListItemIcon>
  //     <ListItemText primary='Dashboard' />
  //   </ListItem>
  //   <ListItem button>
  //     <ListItemIcon>
  //       <ShoppingCartIcon />
  //     </ListItemIcon>
  //     <Link to='/customers'>
  //       {' '}
  //       <ListItemText primary='Customers' />
  //     </Link>
  //   </ListItem>
  //   <ListItem button>
  //     <ListItemIcon>
  //       <PeopleIcon />
  //     </ListItemIcon>
  //     <Link to='/products'>
  //       <ListItemText primary='Product' />
  //     </Link>
  //   </ListItem>
  //   <ListItem button>
  //     <ListItemIcon>
  //       <BarChartIcon />
  //     </ListItemIcon>
  //     <Link to='/suppliers'>
  //       <ListItemText primary='Suppliers' />
  //     </Link>
  //   </ListItem>
  //   <ListItem button>
  //     <ListItemIcon>
  //       <LayersIcon />
  //     </ListItemIcon>
  //     <Link to='/distributors'>
  //       <ListItemText primary='Distributor' />
  //     </Link>
  //   </ListItem>
  //   <ListItem button>
  //     <ListItemIcon>
  //       <LayersIcon />
  //     </ListItemIcon>
  //     <Link to='/diocese'>
  //       <ListItemText primary='Diocese' />
  //     </Link>
  //   </ListItem>
  // </div>

  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <ListItemText primary='Dashboard' />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <Link to='/customers' style={{ textDecoration: 'none' }}>
        {' '}
        <ListItemText primary='Customers' />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <Link to='/products' style={{ textDecoration: 'none' }}>
        <ListItemText primary='Product' />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <Link to='/suppliers' style={{ textDecoration: 'none' }}>
        <ListItemText primary='Suppliers' />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <Link to='/distributors' style={{ textDecoration: 'none' }}>
        <ListItemText primary='Distributor' />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <Link to='/diocese' style={{ textDecoration: 'none' }}>
        <ListItemText primary='Diocese' />
      </Link>
    </ListItem>
  </div>
)

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Invoice</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='VAT' />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='D_Invoice' />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='DP_Master' />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='DPayment_Allocation' />
    </ListItem>
  </div>
)
