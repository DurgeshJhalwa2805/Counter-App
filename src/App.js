import React, { Component } from 'react'
import { Routes, Route } from "react-router-dom"
import Counter from './components/Counter'
import UserForm from './components/UserForm'
export default class App extends Component {

  render() {

    return (
      <>
        <div className="App">
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="form" element={<UserForm />} />
          </Routes>
        </div>
      </>
    )
  }
}

