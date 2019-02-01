import React, { Component } from 'react';
import Profil from './containers/Profil';
import MyComment from './components/MyComment';
import {Button} from 'antd';
import JeanneImg from './images/jeanne.jpg';
import MartineImg from './images/martine.jpg';
import ClaudeImg from './images/claude.jpg';

import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      jeanne: true,
      martine: false,
      claude: false
    }
  }

  jeanne(){
    this.setState({
      jeanne: true,
      martine:false,
      claude: false
    });
  }

  martine(){
    this.setState({
      jeanne: false,
      martine:true,
      claude: false
    });
  }

  claude(){
    this.setState({
      jeanne: false,
      martine:false,
      claude: true
    })
  }

  render() {
    return (
      <div className="App">
        <Button onClick={()=>{this.jeanne()}}>Jeanne</Button>
        <Button onClick={()=>{this.martine()}}>Martine</Button>
        <Button onClick={()=>{this.claude()}}>Claude</Button>

        {
          this.state.jeanne && (
            <React.Fragment>
              <Profil
                source={JeanneImg}
                nom="d'Arc"
                prenom="Jeanne"
                birth="06 janvier 1412"
              />
              <MyComment nom="Jeanne d'Arc" commentaire="Boutons les anglais hors de France ! Rejoignez le mouvement gilets d'armures contre la tyrannie patriarchale anglaise #giletarmure "/>
            </React.Fragment>
          )
        }

        {
          this.state.martine && (
            <React.Fragment>
              <Profil
                source={MartineImg}
                nom="XXX"
                prenom="Martine"
                birth="1954"
              />
              <MyComment nom="Martine" commentaire="Venez lire le dernier Martine ! Martine en stage de survie dans la jungle en featuring avec ma pote Dora l'Exploratrice et son singe Chipeur ! "/>
            </React.Fragment>
          )
        }

        {
          this.state.claude && (
            <React.Fragment>
              <Profil
                source={ClaudeImg}
                nom="François"
                prenom="Claude"
                birth="1er février 1939"
              />
              <MyComment nom="Claude François" commentaire="Ne prenez pas de douche avec un sèche-cheveux à proximité, ou vous allez littéralement faire des étincelles dans votre apartement"/>
            </React.Fragment>
          )
        }
      </div>
    );
  }
}

export default App;
