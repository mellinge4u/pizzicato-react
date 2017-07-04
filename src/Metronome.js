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
            timerId: null
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

    stopMetronome = () => {
        const {timerId} = this.state;
        clearInterval(timerId);
    };

    runMetronome = () => {
        const timerId = setInterval(() => {
                this.state.sineWave.play();
                setTimeout(() => {
                    this.state.sineWave.stop();
                }, 100);

                console.log('tic')
            }
            ,
                60000. / parseInt(this.props.tempo)
            )
        ;
        console.log(60000. / parseInt(this.props.tempo))
        this.setState({timerId :timerId})
    };

    render() {
        return (
            <div>
                Metronome running at {this.props.tempo} BPM
                <div><TextField hintText="100" onChange={this.handleChangeTempo}/>
                    <RaisedButton onClick={this.runMetronome}>Run</RaisedButton>
                    <RaisedButton onClick={this.stopMetronome}>Stop</RaisedButton>

                </div>
            </ div >
        );
    }

}

export default Metronome;