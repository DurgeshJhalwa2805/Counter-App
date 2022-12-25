import React, { Component } from 'react'
import "./CounterCss.css"
import UserDetails from './UserDetails';
import { Link } from "react-router-dom";

export default class UserForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            number: "",
            city: "",
            lists: [],
            copyState: [],
        };
    }

    componentDidMount() {
        this.sortUserData()
    }
    componentDidUpdate(prevProps, prevState) {

        if (prevState.lists.length !== this.state.lists.length) {

            this.sortUserData()
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    sortUserData = () => {
        if (this.state.lists.length > 1) {
            let temp = [...this.state.lists]
            temp.sort((a, b) => {
                let na = a.name.toLowerCase(),
                    nb = b.name.toLowerCase();

                if (na < nb) {
                    return -1;
                }
                if (na > nb) {
                    return 1;
                }
                return 0;
            });

            this.setState({ lists: temp })
        }
    }

    handleSearch = e => {
        let search = e.target?.value?.toLowerCase()

        let items = []
        if (search.length >= 2) {
            this.state.lists.filter((el) => {
                if (el.name.toLowerCase().includes(search) || el.email.toLowerCase().includes(search) || el.number.toLowerCase().includes(search) || el.city.toLowerCase().includes(search)) {
                    items.push(el)
                }
            })

            this.setState({ lists: items })


        }

        if (search.length == 0) {
            this.setState({ lists: this.state.copyState })
        }


    }




    handleSubmit = e => {
        e.preventDefault()

        this.setState({
            lists: [...this.state.lists, {
                name: this.state.name,
                email: this.state.email,
                number: this.state.number,
                city: this.state.city,
            }],
            copyState: [...this.state.copyState, {
                name: this.state.name,
                email: this.state.email,
                number: this.state.number,
                city: this.state.city,
            }],
            name: "",
            email: "",
            city: "",
            number: "",
        })


    }


    render() {

        return (
            <div className='mainDiv'>
                <div className='formCard'>
                    <h3 className='title'> UserDetails</h3>
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <div class="row">
                                <div class="column">Name</div>
                                <div class="column">
                                    <input className='formInput' name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="column">Email</div>
                                <div class="column">
                                    <input className='formInput' name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="column">Number</div>
                                <div class="column">
                                    <input className='formInput' name="number" type="number" value={this.state.number} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="column">City</div>
                                <div class="column">
                                    <input className='formInput' name="city" type="text" value={this.state.city} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div>
                                <button className='btnCss f1' disabled={this.state.name.length > 0 && this.state.number.length > 0 && this.state.email.length > 0 && this.state.city.length > 0 ? false : true} type='submit'>
                                    Submit
                                </button>
                                <button className='btnCss f1 backBtn'>
                                    <Link to="/" className='linkcss'>
                                        Back
                                    </Link>

                                </button>
                            </div>
                        </form>
                        {this.state.copyState.length > 1 && <div className='searchBox'>
                            <input class="input-elevated" type="text" placeholder="Search..." onChange={this.handleSearch} onBlur={(e) => {
                                if (e.target.value.length == 0) {

                                    this.setState({ lists: this.state.copyState })
                                }

                            }} />
                        </div>}
                    </div>

                    <UserDetails userdata={this.state.lists} />

                </div>

            </div>
        )
    }
}

