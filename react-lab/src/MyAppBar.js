import React, {Component} from 'react'
import {AppBar, Typography, Toolbar, IconButton, Button} from '@material-ui/core'

class MyAppBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography>
            HP Lovecraft read by Playboi Carti
          </Typography>
          <Button style={{marginLeft: 100}} onClick={this.props.handleClick} variant="contained" color="secondary">
            Have Carti Read More HP Lovecraft
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}
 export default MyAppBar
