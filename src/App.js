import React, {Component} from 'react';
import Navbar from './Components/Navbar'
import Board from './Components/Board'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}

class  App extends Component {
  constructor() {
    super();
    this.state = {
      highScore: 0,
      score: 0
    }
    this.handleChange = this.handleChange.bind(this)
  };
  handleChange(top, cur) {
    this.setState({
      highScore: top,
      score: cur
    })
  }
  render() {
    return (
      <div style={styles.container}>
        <Navbar top={this.state.highScore}
          current={this.state.score}
        />
        <Board 
          grabScore={this.handleChange}
        />
      </div>
    )
  };
}

export default App;
