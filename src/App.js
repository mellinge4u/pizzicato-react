import React, {Component} from 'react';
import './App.css';

import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardHeader, CardText, CardTitle, GridList, MuiThemeProvider} from "material-ui";
import SoundCard from './SoundCard';
import Metronome from './Metronome.js'
import Launchpad from "./Launchpad";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            play: false,
            tile: [],
            tempo: 220
        }
    }

    addSoundCard = () => {
        const newTab = this.state.tile;
        newTab.push(<SoundCard/>);
        this.setState({tile: newTab});
    };

    resetSoundCard = () => {
        const newTab = [];
        this.setState({tile: newTab});
    };

    renderSoundCards = () => {
        if (this.state.tile === null) {
            return <div>nothing</div>
        } else {
            return this.state.tile.map((tile, index) => (
                <div key={index}>{tile}</div>
            ))
        }
    };

    changeTempo = (tmpo) => {
        this.setState({tempo: tmpo});
    };


    render() {
        const soundCard = this.renderSoundCards();
        return (
            <MuiThemeProvider>
                <div className="App">
                    <Card>
                        <CardHeader
                            title="SoundBoard"
                            subtitle="Pizzicato test sound"
                            avatar=""
                        />
                        <Metronome changeTempo={this.changeTempo} tempo={this.state.tempo} play={this.state.play}
                        />
                        <CardTitle title="Play With Sound" subtitle="Sound Card Dashboard"/>
                        <CardText>
                            Add a SoundCard to test sound, modify volume and frequency.
                            <div>
                                <RaisedButton onClick={this.addSoundCard} backgroundColor="#a4c639"> + </RaisedButton>
                                <RaisedButton onClick={this.resetSoundCard} backgroundColor="#ff3300">
                                    Reset </RaisedButton>
                            </div>
                        </CardText>
                        <Card>
                            <GridList
                                cellHeight={200}
                                cols={3}>
                                {soundCard}
                            </GridList>
                        </Card>

                    </Card>
                    <Card>
                        <Launchpad/>
                    </Card>
                </div>

            </MuiThemeProvider>
        );
    }
}

export default App;
