import React, { Component } from 'react';

class Game extends Component {

    constructor(props){
        super(props);
        this.state = {
            randomNumber: Math.floor(Math.random() *10) + 1 + "",
            result: "",
            guessCount: 1,
            toggel:false
        };
        this.checkGuess = this.checkGuess.bind(this);
    }

    checkGuess(event){
        event.preventDefault();
        let guessValue = event.target.guessNumber.value;
        let randomValue = this.state.randomNumber;
        event.target.guessNumber.value = "";

        if(guessValue !== "") {
            this.setState((prevState) => ({              
                guessCount: prevState.guessCount + 1
            }));
            if (guessValue === randomValue) {
                if(this.state.guessCount === 1){
                    this.setState({
                        result: <div>Your first guess is: {guessValue} <br /> Right! You have won the game.</div>,
                        toggel:true
                    });
                }else if(this.state.guessCount === 2){
                    this.setState({
                        result: <div>Your second guess is: {guessValue} <br /> Right! You have won the game.</div>,
                        toggel:true
                    });
                }else if(this.state.guessCount === 3){
                    this.setState({
                        result: <div>Your last guess is: {guessValue} <br /> Right! You have won the game.</div>,
                        toggel:true
                    });
                }
               
                this.submitGuess.setAttribute("disabled", "disabled");
                this.guessNumber.setAttribute("disabled", "disabled");
            } else if (this.state.guessCount === 3) {
                this.setState({
                    result: "GAME OVER! You have loss the game.",
                    toggel: true,
                });
                this.submitGuess.setAttribute("disabled", "disabled");
                this.guessNumber.setAttribute("disabled", "disabled");
            } else{
                if(this.state.guessCount === 1){
                    if((Math.abs(guessValue-randomValue))>=3){
                        this.setState({
                            result: "Your first  guess is: "+guessValue+" (cold)",
                        }); 
                    }else if((Math.abs(guessValue-randomValue))===2){
                        this.setState({
                            result: "Your first guess is: "+guessValue+" (warm)",
                        });
                    }else{
                        this.setState({
                            result: "Your first guess is: "+guessValue+" (hot)",
                        });
                    } 
                }else if(this.state.guessCount === 2){
                    if((Math.abs(guessValue-randomValue))>=3){
                        this.setState({
                            result: "Your second  guess is: "+guessValue+" (cold)",
                        }); 
                    }else if((Math.abs(guessValue-randomValue))===2){
                        this.setState({
                            result: "Your second  guess is: "+guessValue+" (warm)",
                        });
                    }else{
                        this.setState({
                            result: "Your second guess is: "+guessValue+" (hot)",
                        });
                    }
                }
              
            }

        }
    }

    render(){
        return(
            <div>
                <form  onSubmit={this.checkGuess}>
                        <label >Enter a guess:   </label>
                        <input name="guessNumber" type="number" min="1" max="10" ref={(input) => {this.guessNumber = input;}}/>
                        &nbsp;&nbsp;<button type="submit" ref={(button) => {this.submitGuess = button;}}>Guess it</button>
                </form>
                <div>
                    <p className={this.state.classresult}>{this.state.result}</p>  
                   {this.state.toggel ? <button ref={(button) => {this.startNewGame = button;}} onClick={this.props.newGame}>Start new game</button>:""}
                 
                </div>
            </div>
        );
    }
}

export default Game;