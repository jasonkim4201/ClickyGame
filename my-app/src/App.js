import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import beers from "./Data/beers.json";
import BeerPic from "./components/BeerPic";
import Wrapper from './components/Wrapper';

class App extends Component {
  state = {
  beerList: beers   
  };


  render() {
    console.log(this.state.beerList);
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Wrapper>
        {/* use .map to render all the beers */}
        {this.state.beerList.map(beer => {
          return (
            <BeerPic
              key={beer.id}
              image={beer.image}
            />
          )
        })}
        </Wrapper>
      </div>

    )
  }
}

export default App;
