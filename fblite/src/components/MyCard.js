import React, { Component } from 'react';
import { Card, Button } from 'antd';

class MyCard extends Component {

    constructor(props){
        super(props);
        this.state = {
            color: "white"
        }
    }

    changeStyle(){
        if(this.state.color==="white")
        this.setState({color: "blue"});
        if(this.state.color==="blue")
        this.setState({color: "white"})
    }

    render() {
        const {source, nom, prenom, birth} = this.props;
        return (
            <div>
                <Card style={{background:this.state.color}}>
                    <img src={source} alt={nom}/>
                    <p>{nom}</p>
                    <p>{prenom}</p>
                    <p>{birth}</p>
                    <Button onClick={()=>{this.changeStyle()}}>Change Style</Button>
                </Card>
            </div>
        );
    }
}

export default MyCard;