import React from "react"
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import Image from '../components/image';

const styles = {
  root: {
    flexGrow: 1,
    paddingBottom: '10px',
  },
  logo: {
    marginRight: 'auto',
  },
};

const Header = ({ classes, siteTitle }) => (
  <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Image className={classes.logo}/>
        </Toolbar>
      </AppBar>
    </div>
)

export default withStyles(styles)(Header);