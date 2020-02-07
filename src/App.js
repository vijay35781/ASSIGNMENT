import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import Game from './Game';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        gameKey: true
    };

    this.newGame = this.newGame.bind(this);
}

newGame(){
    this.setState((prevState) => ({
        gameKey: !prevState.gameKey
    }));
}
  render() {
    return (
      <div className="container">
        <Header/>
        <Game key={this.state.gameKey} newGame={this.newGame}/>
      </div>
    );
  }
}

export default App;
