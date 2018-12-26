import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   count: this.props.items.value,
  //   title: this.props.items.id,
  //   tags: ["tag1", "tag2", "tag3"]
  // };

  // add = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };

  render() {
    console.log("props", this.props);
    return (
      <React.Fragment>
        <div className="text-center">Title #{this.props.items.id}</div>
        <div className={this.getbadgeClasses()}>{this.formatCounter()}</div>
        <button
          onClick={() => this.props.onIncriment(this.props.items)}
          className="btn btn-secondary"
        >
          Add item
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.items.id)}
          className="btn btn-danger m-2"
        >
          Remove
        </button>
        {/* <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
          <li />
        </ul> */}
      </React.Fragment>
    );
  }

  getbadgeClasses() {
    let bagdeClass = "m-2 badge badge-";
    bagdeClass += this.props.items.value !== 0 ? "primary" : "warning";
    return bagdeClass;
  }

  formatCounter() {
    const { value } = this.props.items;
    console.log(value);
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
