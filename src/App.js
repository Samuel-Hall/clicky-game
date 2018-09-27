import React, { Component } from "react";
import ModalConductor from "./components/ModalConductor";
import ScoreCard from "./components/ScoreCard";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters,
    currentScore: 0,
    topScore: 0
  };

  shuffleCharacters = () => {
    const characters = this.state.characters
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);

    this.setState({ characters });
  };

  updateScore = win => {
    if (win) {
      let currentScore = this.state.currentScore;
      currentScore++;
      this.setState({ currentScore });
      if (currentScore > this.state.topScore) {
        this.setState({ topScore: currentScore });
      }
      if (currentScore === characters.length) {
        setTimeout(function() {
          alert("You Win!");
        }, 500);
      }
    } else {
      this.setState({ currentScore: 0 });
      const characters = this.state.characters.map(function(character) {
        character.hasBeenClicked = false;
      });
      this.setState({
        characters
      });
      alert("You Lose, try again!");
    }
  };

  // handleImageClick = id => {
  //   // Filter this.state.characters for characters with an id not equal to the id being removed
  //   // const characters = this.state.characters.filter(
  //   //   character => character.id !== id
  //   // );

  //   // Grab the character id of the image that has been clicked. Set isClicked to true for the character with the matching id.
  //   // const character = id - 1;
  //   // let charClick = this.state.characters[character].isClicked;
  //   // console.log(`isClicked: ${charClick}`);
  //   // charClick = true;
  //   // console.log(`isClicked: ${charClick}`);

  //   // Set this.state.characters equal to the new characters array
  //   // Increase currentScore each time an image is clicked
  //   this.setState({
  //     characters,
  //     currentScore: this.state.currentScore + 1
  //   });

  //   this.shuffleCharacters();
  // };

  handleImageClick = id => {
    let result;
    const characters = this.state.characters.map(function(character) {
      if (character.id === id) {
        if (character.hasBeenClicked) {
          result = false;
        } else {
          result = true;
          character.hasBeenClicked = true;
        }
      }
    });
    this.setState({ characters });
    this.updateScore(result);
    this.shuffleCharacters();
  };

  // Map over this.state.characters and render a CharacterCard component for each character object
  render() {
    return (
      <Wrapper>
        <Title>
          BoJack Horseman Memory Game
          <ScoreCard
            currentScore={this.state.currentScore}
            topScore={this.state.topScore}
          />
        </Title>
        {this.state.characters.map(character => (
          <CharacterCard
            handleImageClick={this.handleImageClick}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            occupation={character.occupation}
            isClicked={character.isClicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
