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
      claude: false,
      superJNb: 0,
      superMNb: 0,
      superCNb: 0
    }
  }

  superJeanne(){
    this.setState((state) => {
      return {superJNb: state.superJNb + 1};
    });
  }

  superMartine(){
    this.setState((state) => {
      return {superMNb: state.superMNb + 1};
    });
  }

  superClaude(){
    this.setState((state) => {
      return {superCNb: state.superCNb + 1};
    });
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

    const {superJNb, superMNb, superCNb} = this.state;

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
              <div>
                <MyComment nom="Jeanne d'Arc" commentaire="Boutons les anglais hors de France ! Rejoignez le mouvement gilets d'armures contre la tyrannie patriarchale anglaise #giletarmure "/>
                <Button icon="like" onClick={()=>{this.superJeanne()}}>C'est super ! &nbsp; {superJNb}</Button>
              </div>
              
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
              <div>
                <MyComment nom="Martine" commentaire="Venez lire le dernier Martine ! Martine en stage de survie dans la jungle en featuring avec ma pote Dora l'Exploratrice et son singe Chipeur ! "/>  
                <Button icon="like" onClick={()=>{this.superMartine()}}>C'est super ! &nbsp; {superMNb}</Button>
              </div>
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
              <div>
                <MyComment nom="Claude François" commentaire="Ne prenez pas de douche avec un sèche-cheveux à proximité, ou vous allez littéralement faire des étincelles dans votre apartement"/>
                <Button icon="like" onClick={()=>{this.superClaude()}}>C'est super ! &nbsp; {superCNb}</Button>
              </div>
            </React.Fragment>
          )
        }
      </div>
    );
  }
}

export default App;
