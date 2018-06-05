import React from 'react';

export default class DigitalClicker extends React.Component {
    state = {
        timesClicked: 0
    }

    clicked = (e) => {
        this.setState({
            timesClicked: this.state.timesClicked + 1
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.clicked}>{this.state.timesClicked}</button>
            </div>
        )
    }
}