import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import { Link } from "react-router-dom";
import './Header.css'

const styles = {
  list: {
    width: 250,
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  color: {
    background: 'linear-gradient(130deg, rgb(22, 192, 237), rgb(150, 131, 206))',
    border: 0,
    borderRadius: 3,
    color: 'white',
  }
  }

class Header extends Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render () {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list} >
        <List>
          <Link to="/tatsuya-works" class="list-style">
            <ListItem button>
              <ListItemText primary="HOME" />
            </ListItem>
          </Link>
          <Link to="/work-portfolio" class="list-style">
            <ListItem button>
              <ListItemText primary="Portfolio" />
            </ListItem>
          </Link>
          <Link to="/work-guide" class="list-style">
            <ListItem button>
              <ListItemText primary="深センNAVI" />
            </ListItem>
          </Link>
          <Link to="/work-spa" class="list-style">
            <ListItem button>
              <ListItemText primary="制作物紹介サイト(SPA)" />
            </ListItem>
          </Link>
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar position="relative" color="inherit" className={classes.color} >
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
              <MenuIcon />
            </IconButton>
            <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer('left', false)}
                onKeyDown={this.toggleDrawer('left', false)}
              >
                {sideList}
              </div>
            </Drawer>
            <nav>
              <ul className="header-list responsive-display">
                <li className="work-home">
                  <strong >
                    <Link to="/tatsuya-works" style={{ boxShadow: 'none', textDecoration: 'none', color: 'inherit', fontFamily: 'Montserrat, sans-serif', }}>HOME</Link>
                  </strong>
                </li>
                <li>
                  <strong className="margin">
                    <Link to="/work-portfolio" style={{ boxShadow: 'none', textDecoration: 'none', color: 'inherit',fontFamily: 'Montserrat, sans-serif', }}>Portfolio</Link>
                  </strong>
                  <strong className="margin">
                    <Link to="/work-guide" style={{ boxShadow: 'none', textDecoration: 'none', color: 'inherit',fontFamily: 'Montserrat, sans-serif', }}>深センNAVI</Link>
                  </strong>
                  <strong className="margin">
                    <Link to="/work-spa" style={{ boxShadow: 'none', textDecoration: 'none', color: 'inherit',fontFamily: 'Montserrat, sans-serif', }}>制作物紹介サイト(SPA)</Link>
                  </strong>
                </li>
              </ul>
            </nav>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);