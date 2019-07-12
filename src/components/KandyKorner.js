import React, {Component} from 'react';
import StoreList from "./stores/StoreList"
import EmployeeList from "./employees/EmployeeList"
import CandyList from "./candies/CandyList"

export default class KandyKorner extends Component {
  storeArray = [
    {id: 1, name: "Kandy Korner", location: "500 Kandy Way"}
  ]

  employeeArray = [
    {id: 1, name: "Kandice"}
  ]

  candyTypeArray = [
    {id: 1, type: "Kernel"}
  ]

  candyArray = [
    {id: 1, candy: "Kandy Korn", candyTypeId: 1}
  ]

  state = {
    stores: this.storeArray,
    employees: this.employeeArray,
    candyType: this.candyTypeArray,
    candies: this.candyArray
  }

  render() {
    return(
      <div>
        <article>
          <h3>Stores</h3>
          <StoreList stores={this.state.stores} />
        </article>
        <article>
          <h3>Employees</h3>
          <EmployeeList employees={this.state.employees} />
        </article>
        <article>
          <h3>Candy</h3>
          <CandyList candies={this.state.candies} />
        </article>
      </div>
    )
  }




}