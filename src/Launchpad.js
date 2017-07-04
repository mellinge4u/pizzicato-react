/**
 * Created by erwan.mellinger on 04/07/2017.
 */
import React, {Component} from 'react';
import {Card, GridList, RaisedButton} from "material-ui";
import Key from "./Key";
import pizzicato from 'pizzicato'

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 500,

        overflowX: ''

    },
    thatdiv: {}
};

class Launchpad extends Component {

    constructor(props) {
        super(props);

        const sineWave = new pizzicato.Sound({
            source: 'wave',
            options: {
                frequency: 261.63
            }
        });
        this.state = {
            keys: [],
            sineWave: sineWave
        }
    }

    initKeys() {
        for (let i = 0; i < 16; i++) {
            const newTab = this.state.keys;
            newTab.push(<Key/>);
            this.setState({keys: newTab});
        }
    }

    componentWillMount() {
        this.initKeys();
        console.log('key length', this.state.keys)
    }

    renderKeys = () => {
        console.log('ici');
        if (this.state.keys === null) {
            return <div>nothing</div>
        } else {
            console.log('io')
            return this.state.keys.map((key, index) => (
                <div key={index}>{key}</div>
            ))
        }
    };
    addSoundCard = () => {
        const newTab = this.state.keys;
        newTab.push(<Key/>);
        this.setState({keys: newTab});
    };

    render() {
        const keys = this.renderKeys();
        return (
            <Card>
                <div style={styles.root}>
                    <GridList style={styles.gridList} cols={4}>
                        {keys}
                    </GridList>
                </div>
            </Card>
        )
            ;

    }

}

export default Launchpad;