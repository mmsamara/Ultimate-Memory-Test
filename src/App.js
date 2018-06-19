import React, {Component} from "react";

class App extends Component {

    state = {
        score: 0,

        characters: [
            {
                name: "Mario",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/mario.png",
                clicked: false,
            },
            {
                name: "Donkey Kong",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/donkey_kong.png",
                clicked: false,
            },
            {
                name: "Link",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/link.png",
                clicked: false,
            },
            {
                name: "Samus",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/samus.png",
                clicked: false,
            },
            {
                name: "Yoshi",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/yoshi.png",
                clicked: false,
            },
            {
                name: "Kirby",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/kirby.png",
                clicked: false,
            },
            {
                name: "Fox",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/fox.png",
                clicked: false,
            },
            {
                name: "Pikachu",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/pikachu.png",
                clicked: false,
            },
            {
                name: "Luigi",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/luigi.png",
                clicked: false,
            },
            {
                name: "Ness",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/ness.png",
                clicked: false,
            },
            {
                name: "Captain Falcon",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/captain_falcon.png",
                clicked: false,
            },
            {
                name: "Jigglypuff",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/jigglypuff.png",
                clicked: false,
            },
            {
                name: "Peach",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/peach.png",
                clicked: false,
            },
            {
                name: "Daisy",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/daisy.png",
                clicked: false,
            },
            {
                name: "Bowser",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/bowser.png",
                clicked: false,
            },
            {
                name: "Ice Climbers",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/ice_climbers.png",
                clicked: false,
            },
            {
                name: "Sheik",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/sheik.png",
                clicked: false,
            },
            {
                name: "Zelda",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/zelda.png",
                clicked: false,
            },
            {
                name: "Dr. Mario",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/dr_mario.png",
                clicked: false,
            },
            {
                name: "Pichu",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/pichu.png",
                clicked: false,
            },
            {
                name: "Falco",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/falco.png",
                clicked: false,
            },
            {
                name: "Marth",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/marth.png",
                clicked: false,
            },
            {
                name: "Lucina",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/lucina.png",
                clicked: false,
            },
            {
                name: "Young Link",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/young_link.png",
                clicked: false,
            },
            {
                name: "Ganondorf",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/ganondorf.png",
                clicked: false,
            },
            {
                name: "Mewtwo",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/mewtwo.png",
                clicked: false,
            },
            {
                name: "Roy",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/roy.png",
                clicked: false,
            },
            {
                name: "Mr. Game & Watch",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/mr_game_and_watch.png",
                clicked: false,
            },
            {
                name: "Meta Knight",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/meta_knight.png",
                clicked: false,
            },
            {
                name: "Pit",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/pit.png",
                clicked: false,
            },
            {
                name: "Dark Pit",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/dark_pit.png",
                clicked: false,
            },
            {
                name: "Zero Suit Samus",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/zero_suit_samus.png",
                clicked: false,
            },
            {
                name: "Wario",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/wario.png",
                clicked: false,
            },
            {
                name: "Snake",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/snake.png",
                clicked: false,
            },
            {
                name: "Ike",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/ike.png",
                clicked: false,
            },
            {
                name: "Pokemon Trainer",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/pokemon_trainer.png",
                clicked: false,
            },
            {
                name: "Diddy Kong",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/diddy_kong.png",
                clicked: false,
            },
            {
                name: "Lucas",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/lucas.png",
                clicked: false,
            },
            {
                name: "Sonic",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/sonic.png",
                clicked: false,
            },
            {
                name: "King Dedede",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/king_dedede.png",
                clicked: false,
            },
            {
                name: "Olimar",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/olimar.png",
                clicked: false,
            },
            {
                name: "Lucario",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/lucario.png",
                clicked: false,
            },
            {
                name: "R.O.B.",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/rob.png",
                clicked: false,
            },
            {
                name: "Toon Link",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/toon_link.png",
                clicked: false,
            },
            {
                name: "Wolf",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/wolf.png",
                clicked: false,
            },
            {
                name: "Villager",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/villager.png",
                clicked: false,
            },
            {
                name: "Mega Man",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/mega_man.png",
                clicked: false,
            },
            {
                name: "Wii Fit Trainer",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/wii_fit_trainer.png",
                clicked: false,
            },
            {
                name: "Rosalina & Luma",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/rosalina_and_luma.png",
                clicked: false,
            },
            {
                name: "Little Mac",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/little_mac.png",
                clicked: false,
            },
            {
                name: "Greninja",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/greninja.png",
                clicked: false,
            },
            {
                name: "Mii Fighter",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/mii_fighter.png",
                clicked: false,
            },
            {
                name: "Palutena",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/palutena.png",
                clicked: false,
            },
            {
                name: "Pac-Man",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/pac_man.png",
                clicked: false,
            },
            {
                name: "Robin",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/robin.png",
                clicked: false,
            },
            {
                name: "Shulk",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/shulk.png",
                clicked: false,
            },
            {
                name: "Bowser Jr.",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/bowser_jr.png",
                clicked: false,
            },
            {
                name: "Duck Hunt",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/duck_hunt.png",
                clicked: false,
            },
            {
                name: "Ryu",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/ryu.png",
                clicked: false,
            },
            {
                name: "Cloud",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/cloud.png",
                clicked: false,
            },
            {
                name: "Bayonetta",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/bayonetta.png",
                clicked: false,
            },
            {
                name: "Inkling",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/inkling.png",
                clicked: false,
            },
            {
                name: "Ridley",
                url: "https://www.smashbros.com/assets_v2/img/fighter/thumb_a/ridley.png",
                clicked: false,
            },
        ]
    }

    clickHandler = (character) => {
        console.log(character);
        //Check to see if character has been clicked 
        this.state.characters.map((item, index) => {
            if (item.name === character) {
                //If it's been clicked game is over + start the game again
                if (item.clicked) {
                    console.log("Game Over!");
                } else {
                    let newCharacters = [...this.state.characters];
                    let score = this.state.score;
                    score++;
                    newCharacters[index].clicked = true;
                    //If not then add 1 to the score
                    this.setState({
                        score,
                        characters: newCharacters,  
                    }, () => console.log("State was changed", this.state.score, this.state.characters))

                    this.shuffleCards();
                }
            }
        })
        //Shuffle the cards and start the game again
    }
    
    shuffleCards = () => {
        let newCharacters = [...this.state.characters];

        let i = newCharacters.length - 1;
        while (i > 0) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = newCharacters[i];
          newCharacters[i] = newCharacters[j];
          newCharacters[j] = temp;
          i--;
        }

        this.setState({
            characters: newCharacters
        }, () => console.log("Updated"))
    }

    render() {

        return(
            <div className = "container">
                <div className="row">
                    {this.state.characters.map((character, index) => {
                        return (
                            <div onClick = {() => this.clickHandler(character.name)} key = {index}>
                                <div className = "col-xs-4 col-md-2">
                                    <img src={character.url} alt={character.name} className="img-thumbnail"/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default App;