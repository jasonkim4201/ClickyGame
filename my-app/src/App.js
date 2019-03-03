import React, { Component } from 'react';
import Navbar from "./components/Navbar";
/* import Jumbotron from "./components/Jumbotron"; */
import beers from "./Data/beers.json";
import BeerPic from "./components/BeerPic";
import Wrapper from './components/Wrapper';

class App extends Component {
  state = {
  beerList: beers   
  };
  // scramble beer each time it is clicked
  BeerClickHandler = beerId => {
    // randomizes placement of beer
    const scrambledBeer = this.state.beerList.sort(() => 0.5 - Math.random());

    // Also need to set click boolean to TRUE on click. 
    // if beer is clicked and clicked status = false then set clicked status to true and +1 points in setState
    // if beer is clicked and clicked status = true then game over and reset score to 0 but also keep a state of highest score
    this.setState({
      beerList: scrambledBeer
    });
  }

  // render UI and use .map to print each beer pics
  render() {
    console.log(this.state.beerList);
    return (
      <div>
        <Navbar />
        <Wrapper>
        {/* use .map to render all the beers */}
        {this.state.beerList.map(beer => {
          return (
            <BeerPic
              key={beer.id}
              beerId = {beer.id}
              image={beer.image}
              BeerClickHandler = {this.BeerClickHandler}
            />
          )
        })}
        </Wrapper>
      </div>

    )
  }
}

export default App;
