import React, { Component } from 'react'

export class Dashboard extends Component {
    render() {
        return (
            <div>
                <h2>Dashboard</h2>
                <button data-testid='strike'>Strike</button>
                <button data-testid="ball" onClick={this.props.ballHandler}>Ball</button>
                <button data-testid='foul'>Foul</button>
                <button data-testid='hit'>Hit</button>
            </div>
        )
    }
}

export default Dashboard;

