import React, { Component } from 'react';

import Dashboard from './Dashboard';


export class Display extends Component {
    constructor() {
        super();
        this.state = {
            ball: 0,
            strike: 0,
        }
    }

    ballHandler = ev => {
        ev.preventDefault();
        if (this.state.ball < 4) {
            this.setState({
                ball: this.state.ball + 1
            });
        } else if (this.state.ball === 4) {
            this.setState({
                ball: 0,
                strike: 0
            });
        }
    }

    strikeHandler = ev => {
        ev.preventDefault();
        if (this.state.strike < 3) {
            this.setState({
                strike: this.state.strike + 1
            });
        } else if (this.state.strike === 3) {
            this.setState({
                ball: 0,
                strike: 0
            });
        }
    }

    hitHandler = ev => {
        ev.preventDefault();
        this.setState({
            ball: 0,
            strike: 0
        }); 
    }

    render() {
        return (
            <div>
                <h2>Display</h2>
                <p>Ball Count</p>
                <p data-testid="ballCount">{this.state.ball}</p>
                <p>Strike Count</p>
                <p data-testid="strikeCount">{this.state.strike}</p>
                <Dashboard
                    ballHandler={this.ballHandler} 
                    strikeHandler={this.strikeHandler}
                    hitHandler={this.hitHandler}
                />
            </div>
        )
    }
}

export default Display;

