import {Component} from 'react'
import MyAppBar from './MyAppBar.js';
import ItemBox from './ItemBox.js'
import './App.css';
import {Grid} from '@material-ui/core'
import carti from 'carti'
import hplipsum from 'hplipsum'

class App extends Component {
  constructor(props) {
    super(props);
    this.generateGrid = this.generateGrid.bind(this);
    this.generateList = this.generateList.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      l: this.generateList()
    };
  }

  generateList = () => {
    var l = []
    for (var i = 0; i < 100; i++) {
      let text = carti(hplipsum(Math.floor(10,26)));
      l.push(text)
    }
    return l
  }

  generateGrid = () => {
    return (
      this.state.l.map(item => {  return <ItemBox text={item}/>;  })
    )
  }

  handleClick = () => {
    this.setState({
      l: this.generateList()
    });
  }

  render() {
    return (
      <div>
      <MyAppBar handleClick={this.handleClick}/>
        <Grid container direction="row" justify="space-evenly" spacing={5}>
          {this.generateGrid()}
        </Grid>
      </div>
    );
  }
}

export default App;
