import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import StoreList from "./stores/StoreList"
import EmployeeList from "./employees/EmployeeList"
import CandyList from "./candies/CandyList"

export default class ApplicationViews extends Component {


  state = {
    stores: [],
    employees: [],
    candyType: [],
    candies: []
  }

  componentDidMount() {
    const newState = {}

    fetch("http://localhost:5002/stores")
    .then(r=> r.json())
    .then(stores => newState.stores = stores)
    .then(() => fetch("http://localhost:5002/employees")
    .then(r => r.json()))
    .then(employees => newState.employees = employees)
    .then(() => fetch("http://localhost:5002/candyType")
    .then(r => r.json()))
    .then(candyType => newState.candyType = candyType)
    .then(() => fetch("http://localhost:5002/candies")
    .then(r => r.json()))
    .then(candies => newState.candies = candies)
    .then(() => this.setState(newState))
  }

  deleteKandy = (id) => {
    return fetch(`http://localhost:5002/candies/${id}`,{
      method: "DELETE"
    })
    .then(e => e.json())
    .then(() => fetch("http://localhost:5002/candies"))
    .then(e => e.json())
    .then(candy => this.setState({candies: candy}))
  }

  render() {
    return(
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <StoreList stores={this.state.stores} />
        }} />
        <Route path="/employees" render={(props) => {
          return <EmployeeList employees={this.state.employees} />
        }} />
        <Route path="/candies" render={(props) => {
          return <CandyList candies={this.state.candies} candyType={this.state.candyType} deleteKandy={this.deleteKandy} />
        }} />
      </React.Fragment>
    )
  }




}