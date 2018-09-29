import React, { Component } from 'react';
import './total.css';

class Total extends Component {

  render() {

    let totalExpenses = this.props.filteredExpenses.map(function(expense) {
      return expense.amount;
      })
      .reduce(function(accumulator, value) {
      return accumulator + value
       }, 0);

    return (
      <div className="total">
        <div className = "label">TOTAL EXPENSES</div>
        <div>{totalExpenses.toFixed(2)} $</div>
      </div>
    );
  }
}

export default Total;
