import React, { Component } from 'react'
import "./CounterCss.css"


export default class SingleButton extends Component {
    render() {
        return (
            <div className='buttonDiv'>
                <button className='btnCss' onClick={() => {
                    this.props.increment ? this.props.countFunc(1) : this.props.countFunc(-1)
                }}>
                    {this.props.increment ? "Increment" : "Decrement"}
                </button>
            </div>
        )
    }
}
