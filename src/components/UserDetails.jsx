import React, { Component } from 'react'
import "./CounterCss.css"

export default class UserDetails extends Component {

    render() {

        return (
            <>
                {this.props.userdata?.length > 0 ? <>

                    <table class="zui-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Number</th>
                                <th>City</th>

                            </tr>
                        </thead>
                        <tbody>
                            {this.props.userdata.map((val, ind) => {
                                return (
                                    <tr>
                                        <td>{ind + 1}</td>
                                        <td>{val.name}</td>
                                        <td>{val.email}</td>
                                        <td>{val.number}</td>
                                        <td>{val.city}</td>

                                    </tr>
                                )
                            })}


                        </tbody>
                    </table>
                </> : null}
            </>
        )
    }
}

