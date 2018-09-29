import React, { Component } from 'react';
import './list.css';

class List extends Component {

    render() {

      let listItems =  this.props.filteredExpenses.map((cost) =>
        <li key={cost.id} className = "list-costs">
          <span className= "cost-title">{cost.title}</span>
          <span className= "cost-paidfor">Paid by {cost.paidBy}</span>
          <span className= "cost-amount">{cost.amount.toFixed(2)} $</span>
          </li>
      );

      return (
        <div className="content-list">
            <ul className = "ul-costs">{listItems}</ul>
        </div>
      );
    }
  }
  
  export default List;
  