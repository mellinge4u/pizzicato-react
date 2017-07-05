/**
 * Created by erwan.mellinger on 04/07/2017.
 */
import React, {Component} from 'react';
import {GridTile, Paper, RaisedButton} from "material-ui";

const style = {
    height: 100,
    width: 100,
    backgroundColor: 'lightblue'
};

class Key extends Component {

    constructor(props){
        super(props);
        const sineWave = this.props.sineWave;
        this.state = {
            sineWave : sineWave
        }
    }

    handleSound = () => {
        this.state.sineWave.play();
        console.log('handlePress')
    };

    handleStop = () => {
        this.state.sineWave.stop();
        console.log('handleStop')
    };

    render() {
        return (
            <RaisedButton style={style} onMouseDown={this.handleSound} onMouseUp={this.handleStop} onMouseLeave={this.handleStop} backgroundColor= 'lightblue' />
        );

    }

}

export default Key;