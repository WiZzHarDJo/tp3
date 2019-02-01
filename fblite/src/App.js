import React, { Component } from 'react';
import Profil from './containers/Profil';
import MyComment from './components/MyComment';
import MyButton from './components/MyButton'

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

  render() {
    return (
      <div className="App">
        <MyButton name="Jeanne"/>
        <MyButton name="Martine"/>
        <MyButton name="Claude"/>

        {
          this.state.jeanne && (
            <React.Fragment>
              <Profil
                nom="XXX"
                prenom="Martine"
                birth="20 aout 1980"
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
