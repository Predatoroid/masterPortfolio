import React, { Component } from "react";

class FeelingProud extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img
        src={require(`../../assets/images/elpidoforos_profile_transparent.png`)}
        alt="elpidoforos_dimitrakopoulos"
        width="400px"
        class="center"
      />
    );
  }
}

export default FeelingProud;
