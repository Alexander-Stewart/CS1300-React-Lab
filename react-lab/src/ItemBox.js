import React, {Component} from 'react'
import {Grid} from '@material-ui/core'

class ItemBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <Grid item xs={3} spacing={3}>
        {this.props.text}
      </Grid>
    );
  }
}

export default ItemBox
