import React, {Component} from "react";
import beers from "../beers.json";
import Navbar from "./components/Navbar/Navbar";
import BeerJumbotron from "./components/Jumbotron/Jumbotron";
import Wrapper from "./components/Wrapper";
import BeerPic from "./components/BeerPic/BeerPic";

class Game extends Component {
  state = {
    beers: beers,
    score: 0,
    highscore: 0
  }

  handleBeerClick = beerId => {
    // create a flag variable to check if correct or not
    let isCorrect = false;

    
    // make copy of beerlist from state
    const beerList = [...this.state.beers];

    // loop over copied array and find object with id clicked on
      // check if card thats click has been clicked before
      // if no => set isCorrect to true and set the card's clicked status to true
    beerList.forEach(beer => {
      if (beer.id === beerId) {
        if (!beer.clicked) {
          isCorrect = true;
          beer.clicked = true;
        }
      }
    });
      // check if isCorrect is true or false
        // if true => run logic for handling a correct guess
        // if false => run logic for handling an incorect guess
    (isCorrect) ? this.handleCorrect(beerList) : this.handleIncorrect(beerList);

  }

  handleCorrect = beerList => {
    // scramble beer
    const scrambledBeers = beerList.sort(() => 0.5 - Math.random());
    
    // get current score and +1
    const currentScore = this.state.score + 1
    let newHighscore = this.state.highscore;
    // check if score is greater than highscore
    if (currentScore > newHighscore) {
      newHighscore = currentScore;
    }

    this.setState({
      beers: scrambledBeers,
      score: currentScore,
      highscore: newHighscore
    });
  }

  handleIncorrect = beerList => {
    const scrambledBeers = beerList.sort(() => 0.5 - Math.random());
    
    // reset all card clicked status to false
    scrambledBeers.forEach(beer => beer.clicked = false);
    
    this.setState({
      beers: scrambledBeers,
      score: 0
    })
  }

  render() {
    return(
      <div>
        <Navbar
          score={this.state.score}
          highscore={this.state.highscore}
        />
        <BeerJumbotron />
        <Wrapper>
          {this.state.beers.map(beer => {
             return (
              <BeerPic
              key={beer.id}
              beer={beer}
              image={beer.image}
              handleBeerClick={this.handleBeerClick}
            />
             )
          })}
        </Wrapper>

      </div>
    )
  }
}


export default Game;