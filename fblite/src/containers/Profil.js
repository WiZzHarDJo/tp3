import React, { Component } from 'react';
import MyCard from "./../components/MyCard";


class Profil extends Component {
  render() {
    return (
      <div className="Profil">
        <MyCard
        nom={this.props.nom}
        prenom={this.props.prenom}
        birth={this.props.birth}
        />
      </div>
    );
  }
}

export default Profil;