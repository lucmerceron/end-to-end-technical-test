import React, { Component } from 'react';
import './filter.css';

class Filter extends Component {

  constructor(props){
    super(props);
    this.state = {
      newUser : ""
    }
  }

  handleChange = (e) => this.props.filterByUser(e.target.value);

  handleChangeUserInput = (e) => this.setState({newUser : e.target.value});

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNewUser(this.state.newUser);
  };

  render() {

    let listUsers = this.props.users.map((user) =>
      <option key={user.id} value = {user.name}>{user.name}</option>
    );

    return (
      <div className="filter">
        <h1 className="filter-title">Integration Weekend</h1>
        <form className="filter-form">
          <span className="filter-label">Filter: </span>
          <select className="filter-select" value={this.props.selectedUser} onChange = {this.handleChange}>
            <option value="">Tous</option>
            {listUsers}
          </select>
          <input className="filter-input" type="text" placeholder = "Add new user" onChange={this.handleChangeUserInput}></input>
          <button className="filter-button" type = "submit" onClick={this.handleSubmit}>+</button>
        </form>
      </div>
    );
  }
}

export default Filter;
