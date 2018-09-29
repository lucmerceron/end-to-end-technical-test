import React, { Component } from 'react';
import './appender.css';

class Appender extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    data.append('id',this.props.numberExpenses + 1);
    let expense = {};
      data.forEach(function(value, key){
      if(key === 'id'){
        expense[key] = parseInt(value, 10);
      }else if(key === 'amount'){
        expense[key] = parseInt(value, 10);
      }else{
        expense[key] = value;
      }
    });
   
    this.props.addExpense(expense);

  };

  render() {
    let listUsers = this.props.users.map((user) =>
      <option key={user.id}>{user.name}</option>
    );
    
    return (

      <div className="appender">
        <form className="form-expense" onSubmit={this.handleSubmit}>
          <input className="input-title" type="text" id = "title" name = "title" placeholder = "What?" value = {this.title}></input>
          <select className="input-user" id = "paidBy" name = "paidBy">
            <option value="" disabled selected hidden>Who?</option>
            {listUsers}
            </select>
          <input className="input-amount" type="text" id = "amount" name = "amount" placeholder = "$$$"></input>
          <button className="button-expense" type = "submit">+</button>
        </form>
      </div>
    );
  }
  }
  
  export default Appender;
  