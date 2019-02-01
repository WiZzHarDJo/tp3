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
                nom="D'Arc"
                prenom="Jeanne"
                birth="01 janvier 1000"
              />
              <MyComment/>
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
                birth="20 aout 1980"
              />
              <MyComment/>
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
                birth="30 septembre 1960"
              />
              <MyComment/>
            </React.Fragment>
          )
        }
      </div>
    );
  }
}

export default App;
