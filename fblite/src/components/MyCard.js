import React, { Component } from 'react';
import { Card, Button } from 'antd';

class MyCard extends Component {

    constructor(props){
        super(props);
        this.state = {
            color: ""
        }
    }

    changeStyle(){
        if(this.state.color==="")
        this.setState({color: "#d3d3d3"});
        if(this.state.color==="#d3d3d3")
        this.setState({color: ""});
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