import { Divider, Drawer, IconButton, List } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { mainListItems, secondaryListItems } from '../pages/listItems'
import clsx from 'clsx'

const drawerWidth = 240
const useStyles = makeStyles(theme => ({
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
}))
function LayoutNav() {
  const [open, setOpen] = React.useState(true)
  const classes = useStyles()

  const handleDrawerClose = () => {
    setOpen(false)
  }

  //   const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  return (
    <div>
      <Drawer
        variant='permanent'
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>

        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>

      <Outlet />
    </div>
  )
}

export default LayoutNav
