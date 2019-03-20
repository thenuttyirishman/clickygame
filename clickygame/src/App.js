import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import nintendo from "./nintendo.json";
import "./App.css"

class App extends Component {
  state = {
    nintendo,
    clickednintendo: [],
    score: 0
  }

  imageclick = events => {
    const currentnintendo = Event.target.alt;
    const nintendoalreadyclicked =
      this.state.clickednintendo.indexOf(currentnintendo) > -1;

    if (nintendoalreadyclicked) {
      this.setState({
        nintendo: this.state.nintendo.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickednintendo: [],
        score: 0
      });
      alert("Sorry you lose. Play again?");
    } else {
      this.setState({
        nintendo: this.state.nintendo.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickednintendo: this.state.clickednintendo.concat(
          currentnintendo
        ),
        score: this.state.score + 1,
      },
        () => {
          if (this.state.score === 8) {
            alert("Congradulations, You Win!");
            this.setState({
              nintendo: this.state.nintendo.sort(function (a, b) {
                return 0.5 - Math.random();
              }),
              clickednintendo: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.nintendo.map(nintendo => (
            <FriendCard
              imageClick={this.imageClick}
              id={nintendo.id}
              key={nintendo.id}
              image={nintendo.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
