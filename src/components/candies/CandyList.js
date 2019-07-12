import React, {Component} from 'react';

export default class CandyList extends Component {
  render() {
    return(
      <section className="candies">
      {
        this.props.candies.map( candy =>
          <div key={candy.id}>
            <h4>{candy.candy}</h4>
            <h5>{candy.candyType}</h5>
          </div>
        )
      }
      </section>
    )
  }
}