import React, { Component } from "react";
const listStyle = { listStyle: "none" };
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
    const btnClass = this.state.isHovered ? { ...itemStyle, ...{ color: "black" } } : itemStyle;
    console.log(this.state, btnClass);
    return (
      <li
        style={btnClass}
        onClick={e => {
          e.preventDefault();
          console.log(this.handleHover());
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

const StoresList = class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const StoreItems = this.props.data.features.map((e, i) => {
      return (
        <StoreItem
          key={i}
          setCenter={this.props.setCenter}
          address={e.properties.address}
          index={i}
        />
      );
    });

    return <ul style={listStyle}>{StoreItems} </ul>;
  }
};

export default StoresList;
