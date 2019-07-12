import React, {Component} from 'react';

export default class EmployeeList extends Component {
  render() {
    return(
      <section className="employees">
        {
          this.props.employees.map( employee =>
            <div key={employee.id}>
              <h4>{employee.name}</h4>
            </div>
          )
        }
      </section>
    )
  }
}