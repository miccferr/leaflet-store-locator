import React, { Component } from "react";
import "../../../../node_modules/bulma/sass/utilities/_all.sass";
import "../../../../node_modules/bulma/sass/grid/columns.sass";
import StoreItems from "../../components/StoreItems";

class StoreList extends Component {
  render() {
    return (
      <div className="menu-scroll">
        <StoreItems setCenter={this.props.setCenter} data={this.props.data} />
      </div>
    );
  }
}

export default StoreList;
