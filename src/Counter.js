import React, { Component } from 'react';

export default class Counter extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            count: this.initialCount
        }
    }
    
    render() {
        return (
            <div>
            <button className="">-</button>
        <span>{this.props.initialCount}</span>
            <button className="">+</button>
          </div>
        )
    }
}