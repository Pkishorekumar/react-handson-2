import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();

    this.displayData = [];

    this.state = {
      showData: this.displayData,
      name: "",
      department: "",
      rating: "",
    };

    this.appendData = this.appendData.bind(this);
    this.setName = this.setName.bind(this);
    this.setDepartment = this.setDepartment.bind(this);
    this.setRating = this.setRating.bind(this);
  }

  appendData() {
    this.displayData.push(
      <div className="displaydata">
        Name: {this.state.name} | Department: {this.state.department} | Rating:{" "}
        {this.state.rating}
      </div>
    );

    this.setState({
      showData: this.displayData,
      name: "",
      department: "",
      rating: "",
    });
  }

  setName(e) {
    let getName = e.target.value;
    this.setState({
      name: getName,
    });
  }

  setDepartment(e) {
    let getDepartment = e.target.value;
    this.setState({
      department: getDepartment,
    });
  }

  setRating(e) {
    let getRating = e.target.value;
    this.setState({
      rating: getRating,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted");
  };

  render() {
    return (
      <div id="container">
      <form className="form" onSubmit={this.handleSubmit}>
        <label>
          Name:{" "}
          <input type="text" value={this.state.name} onChange={this.setName}/>
        </label> <br/>
        <label>
          Department:{" "}
          <input type="text" value={this.state.department} onChange={this.setDepartment}/>
        </label><br/>
        <label>
          Rating:{" "}
          <input type="number" value={this.state.rating} onChange={this.setRating}/>
        </label><br/>
        <input type="submit" value="Submit" onClick={this.appendData}  className='btn'/>
      </form>

        <div id="store">{this.displayData}</div>
      </div>
    );
  }
}

export default Form;