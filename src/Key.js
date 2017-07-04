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


    render() {
        return (
            <RaisedButton style={style}  backgroundColor= 'lightblue' />
        );

    }

}

export default Key;