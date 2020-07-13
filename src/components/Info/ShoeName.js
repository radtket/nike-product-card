import React from "react";
import PropTypes from "prop-types";
import { StyledShoeName } from "../../styles";
import { DEFAULT_ACTIVE_COLOR_HEX } from "../../constants";

const ShoeName = ({ activeColorHex }) => {
  return (
    <StyledShoeName {...{ activeColorHex }}>
      <dl>
        <dt>Nike Zoom KD 12</dt>
        <dd>new</dd>
      </dl>
      <h5>Men's running shoes</h5>
    </StyledShoeName>
  );
};

ShoeName.propTypes = {
  activeColorHex: PropTypes.string,
};

ShoeName.defaultProps = {
  activeColorHex: DEFAULT_ACTIVE_COLOR_HEX,
};

export default ShoeName;
