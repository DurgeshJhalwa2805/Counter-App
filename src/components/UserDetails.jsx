import React, { Component } from 'react'
import "./CounterCss.css"

export default class UserDetails extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         userData: this.props.userdata
    //     }
    // }
    // componentDidMount() {
    //     this.sortUserData()
    // }


    // sortUserData = () => {
    //     if (this.state.userData.length > 1) {
    //         let temp = this.state.userData
    //         temp.sort((a, b) => {
    //             let na = a.name.toLowerCase(),
    //                 nb = b.name.toLowerCase();

    //             if (na < nb) {
    //                 return -1;
    //             }
    //             if (na > nb) {
    //                 return 1;
    //             }
    //             return 0;
    //         });
    //         this.setState({ userData: temp })
    //     }
    // }




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
