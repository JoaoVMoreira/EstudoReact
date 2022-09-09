import React, { Component } from "react"

class Teste extends Component(){
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return (
      <div>
        ola
        <img src={require('./medias/biscoito.png')}></img>
      </div>
    );
  }
}

export default Teste;