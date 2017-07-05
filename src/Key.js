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

    handleSound = () => {
        this.props.sineWave.play();
        console.log('handlePress')
    };

    handleStop = () => {
        this.props.sineWave.stop();
        console.log('handleStop')
    };

    render() {
        return (
            <RaisedButton style={style} onMouseDown={this.handleSound} onMouseUp={this.handleStop} backgroundColor= 'lightblue' />
        );

    }

}

export default Key;