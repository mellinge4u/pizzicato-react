/**
 * Created by erwan.mellinger on 30/06/2017.
 */
import React, {Component} from 'react';
import pizzicato from 'pizzicato';
import {RaisedButton, TextField} from "material-ui";

class Metronome extends Component {

    constructor(props) {
        super(props);

        const sineWave = new pizzicato.Sound({
            source: 'wave',
            options: {
                frequency: 440
            }
        });

        this.state = {
            sineWave: sineWave,
        };
    }

    handleChangeTempo = (e) => {
        const tempo = e.target.value;
        this.props.changeTempo(tempo);

    };

    handleStart = () => {
        this.props.startMetronome();
        this.runMetronome();
    };

    handleStop = () => {
        this.props.stopMetronome();
    };

    runMetronome = () => {
        if (this.props.play) {
           const timer = setInterval(() => {
                    this.state.sineWave.play();
                    setTimeout(() => {
                        this.state.sineWave.stop();
                        if (!this.props.play) {clearInterval(timer)}
                    }, 100);

                    console.log('tic')
                }
                ,
                60000. / parseInt(this.props.tempo)
            )
            ;
            console.log(60000. / parseInt(this.props.tempo))
        }
    };

    render() {
        return (
            <div>
                Metronome running at {this.props.tempo} BPM
                <div><TextField hintText="100" onChange={this.handleChangeTempo}/>
                    <RaisedButton onClick={this.handleStart}>Run</RaisedButton>
                    <RaisedButton onClick={this.handleStop}>Stop</RaisedButton>

                </div>
            </ div >
        );
    }

}

export default Metronome;