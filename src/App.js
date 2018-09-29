import React, { Component } from 'react';
import './App.css';
import Filter from './Filter';
import List from './List.js';
import Appender from './Appender.js';
import Total from './Total.js';
import data from './Data.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedUser : "",
      expenses : [],
      filteredExpenses : [],
      users: []};
  }

  componentWillMount(){
    const cachedUsers = localStorage.getItem('tricount-users');
    const cachedExpenses = localStorage.getItem('tricount-expenses');

    if(cachedUsers){
      this.setState({
        users :  JSON.parse(cachedUsers)
      })
    }else {
      localStorage.setItem('tricount-users', JSON.stringify(data.users));
      this.setState({
        users : data.users
      });
    }

    if(cachedExpenses){
      this.setState({
        expenses : JSON.parse(cachedExpenses),
        filteredExpenses : JSON.parse(cachedExpenses),
      })
    }else {
      localStorage.setItem('tricount-expenses', JSON.stringify(data.costs));
      this.setState({
        expenses : data.costs,
        filteredExpenses : data.costs,
      });
    }
  }

  filterByUser = (user) => {
    let filteredExpenses = this.state.expenses.filter((expense) => expense.paidBy === user || user ==="");
    this.setState({
      selectedUser : user,
      filteredExpenses : filteredExpenses});
  };

  addExpense = (data) => {
    let expenses = this.state.expenses;
    expenses.push(data);
    for (var expense of expenses.values()) {
      console.log(expense); 
   }
    this.filterByUser(this.state.selectedUser);
    localStorage.setItem('tricount-expenses', JSON.stringify(expenses));
    this.setState({
      expenses : expenses
    })
  }

  addNewUser = (user) => {
    let object  = {
      id: this.state.users.length + 1,
      name: user
    }

    let users = this.state.users;
    users.push(object);
    localStorage.setItem('tricount-users', JSON.stringify(users));
    this.setState({
      users : users
    })
  }

  render() {
    return (
      <div className="App">
        <Filter users = {this.state.users} selectedUser = {this.state.selectedUser} filterByUser = {this.filterByUser} addNewUser = {this.addNewUser}/>
        <List filteredExpenses = {this.state.filteredExpenses}/>
        <Appender users = {this.state.users} addExpense = {this.addExpense} numberExpenses = {this.state.expenses.length}/>
        <Total filteredExpenses = {this.state.filteredExpenses}/>
      </div>
    );
  }
}
export default App;
