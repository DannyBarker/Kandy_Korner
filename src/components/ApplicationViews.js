import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import StoreList from "./stores/StoreList"
import EmployeeList from "./employees/EmployeeList"
import CandyList from "./candies/CandyList"

export default class ApplicationViews extends Component {
  storeArray = [
    {id: 1, name: "Kandy Korner", location: "500 Kandy Way"}
  ]

  employeeArray = [
    {id: 1, name: "Kandice"}
  ]

  candyTypeArray = [
    {id: 1, type: "Kernel"},
    {id: 2, type: "Sucker"}
  ]

  candyArray = [
    {id: 1, candy: "Kandy Korn", candyTypeId: 2}
  ]

  state = {
    stores: this.storeArray,
    employees: this.employeeArray,
    candyType: this.candyTypeArray,
    candies: this.candyArray
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
          return <CandyList candies={this.state.candies} candyType={this.state.candyType} />
        }} />
      </React.Fragment>
    )
  }




}