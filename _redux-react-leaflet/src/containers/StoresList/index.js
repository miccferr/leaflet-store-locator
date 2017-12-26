import React, { Component } from "react";
import "../../../../node_modules/bulma/sass/utilities/_all.sass";
import "../../../../node_modules/bulma/sass/grid/columns.sass";
import StoreItem from "../../components/StoreItem";
const listStyle = { listStyle: "none" };
class StoreList extends Component {
  constructor(props) {
    super(props);
    this.state = { whichIsSelected: null };
  }
  clickHandler(idx) {
    console.log("CLICCC", idx);
    this.setState({ whichIsSelected: idx });
  }
  render() {
    const StoreItems = this.props.data.features.map((e, i) => {
      var is_selected = this.state.whichIsSelected == i;
      return (
        <StoreItem
          key={i}
          setCenter={this.props.setCenter}
          address={e.properties.address}
          clickHandler={() => this.clickHandler}
          index={i}
          isSelected={is_selected}
        />
      );
    });
    return (
      <div className="menu-scroll">
        <ul style={listStyle}>{StoreItems} </ul>
      </div>
    );
  }
}

export default StoreList;
