import React, { Component } from 'react';
import MyCard from "./../components/MyCard";


class Profil extends Component {
  render() {
    const {source, nom, prenom, birth}=this.props;
    return (
      <div className="Profil">
        <MyCard
        source={source}
        nom={nom}
        prenom={prenom}
        birth={birth}
        />
      </div>
    );
  }
}

export default Profil;