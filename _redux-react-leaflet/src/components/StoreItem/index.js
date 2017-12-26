import React, { Component } from "react";

const itemStyle = {
  margin: "5px",
  color: "#8f8fab",
};

const StoreItem = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false };
  }

  handleHover() {
    this.setState({
      isHovered: !this.state.isHovered,
    });
  }

  render() {
    const btnClass =
      this.state.isHovered || this.props.isSelected
        ? { ...itemStyle, ...{ color: "black" } }
        : itemStyle;
    return (
      <li
        style={btnClass}
        onClick={e => {
          e.preventDefault();
          console.log("IDX", this.props.index);
          this.props.clickHandler(this.props.index);
          this.props.setCenter(this.props.index);
        }}
        onMouseEnter={() => this.handleHover()}
        onMouseLeave={() => this.handleHover()}
      >
        {this.props.address}
      </li>
    );
  }
};

export default StoreItem;
