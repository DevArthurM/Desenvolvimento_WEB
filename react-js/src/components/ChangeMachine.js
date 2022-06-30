import React from 'react'
import './ChangeMachine.css'

export default class ChangeMachine extends React.Component {

    render(){
        
        return (
        <div>
            <p>{this.props.text}</p>
            <button onClick={() => this.props.setText('MUDANDO DE ESTADO DENTRO DE UM COMPONENTE')}>COMPONENTE</button>
        </div>
        )
    
    }

}