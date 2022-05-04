import React, { Component } from "react";

class FeelingProud extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img
        src={require(`../../assets/images/elpidoforos_profile_transparent.png`)}
        alt="elpidoforos_dimitrakopoulos"
      />
    );
  }
}

export default FeelingProud;
