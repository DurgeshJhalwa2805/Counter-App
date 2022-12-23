import React, { Component } from 'react'
import SingleButton from './SingleButton';
import "./CounterCss.css"
import { Link } from "react-router-dom";

export default class Counter extends Component {


    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }


    countFunc = (val) => {
        this.setState({ count: this.state.count + val })
    }

    render() {

        return (
            <div className='mainDiv'>
                <div className='card'>
                    <h1 className="h1Css">  {this.state.count}</h1>
                    <div className='btnDiv'>
                        <SingleButton increment={true} countFunc={this.countFunc.bind(this)} />
                        <SingleButton increment={false} countFunc={this.countFunc.bind(this)} />
                    </div>
                    <div>
                        <button className='btnCss'>
                            <Link to="form" className='linkcss'>
                                User Form
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

