import React from 'react';
import './Clock.css';

export default class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }
    render() {
        return(
            <h1>{this.state.date.toLocaleTimeString()}</h1>
        )
    }
}