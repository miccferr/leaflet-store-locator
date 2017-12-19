import React, { Component } from "react";
import { connect } from "react-redux";
import "../../../../node_modules/bulma/sass/utilities/_all.sass";
import "../../../../node_modules/bulma/sass/grid/columns.sass";
import StoresList from "../../components/StoresList.js";
import { setCenter } from "../../redux/action-creators.js";

class Menu extends Component {
  render() {
    return (
      <div>
        {/* <Controls />*/}
        <StoresList data={this.props.data} setCenter={this.props.setCenter} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setCenter: i => {
      console.log(i);
      dispatch(setCenter(i));
    },
  };
}

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}

Menu = connect(mapStateToProps, mapDispatchToProps)(Menu);

export default Menu;
