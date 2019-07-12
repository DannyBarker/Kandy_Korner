import React, {Component} from 'react';

export default class StoreList extends Component {
  render() {
    return(
      <section className="stores">
      <h3>Stores</h3>
      {
        this.props.stores.map( store =>
          <div key={store.id}>
            <h4>{store.name}</h4>
            <address>{store.location}</address>
          </div>
        )
      }
      </section>
    )
  }
}