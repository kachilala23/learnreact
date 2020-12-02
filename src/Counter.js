import React, { Component } from 'react';

export default class Counter extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            count: props.initialCount
        }
    }
    
    render() {
        return (
            <div>
            <button className="">-</button>
        <span>{this.state.count}</span>
            <button className="">+</button>
          </div>
        )
    }
}