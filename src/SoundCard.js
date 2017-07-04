/**
 * Created by erwan.mellinger on 30/06/2017.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, GridTile, Paper} from "material-ui";
import pizzicato from 'pizzicato'
const style = {

    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: ''
};

class SoundCard extends Component {

    constructor(props) {
        super(props);

        const sineWave = new pizzicato.Sound({
            source: 'wave',
            options: {
                frequency: 261.63
            }
        });

        this.state = {
            sineWave: sineWave
        };
    }


    handleStopSound = () =>{

        this.state.sineWave.stop()
    };


    handleSound = () => {
        this.state.sineWave.play();
    };

    handleFrequencyUp = () => {
        const {sineWave} = this.state;
        sineWave.frequency += 10;
        this.setState({sineWave:sineWave});
    };

    handleFrequencyDown = () => {
        const {sineWave} = this.state;
        sineWave.frequency -= 10;
        this.setState({sineWave:sineWave})
    };

    handleVolumeUp = () => {
        const {sineWave} = this.state;
        sineWave.volume += 0.1;
        this.setState({sineWave:sineWave})
    };

    handleVolumeDown = () => {
        const {sineWave} = this.state;
        sineWave.volume -= 0.1;
        this.setState({sineWave:sineWave})
    };

    render() {
        return (
            <GridTile>
                <Paper style={style} zDepth={2}>
                <div> <div>vol: { this.state.sineWave.volume.toFixed(2)} freq: { this.state.sineWave.frequency.toFixed(2)}</div>
                    vol<RaisedButton  onClick={this.handleVolumeUp}>+</RaisedButton>
                    <RaisedButton onClick={this.handleVolumeDown}> - </RaisedButton>
                </div>
                <div>
                    freq<RaisedButton  onClick={this.handleFrequencyUp}>+</RaisedButton>
                    <RaisedButton  onClick={this.handleFrequencyDown}> - </RaisedButton>
                </div>
                <div>
                    <RaisedButton onClick={this.handleSound} >PLAY</RaisedButton>

                    <RaisedButton onClick={this.handleStopSound} >STOP</RaisedButton>
                </div>
                </Paper>
            </GridTile>
        );
    }
}

export default SoundCard;