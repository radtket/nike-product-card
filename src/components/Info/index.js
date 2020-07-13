import React from "react";
import PropTypes from "prop-types";
import BuySection from "./BuySection";
import SizeContainer from "./SizeContainer";
import ColorContainer from "./ColorContainer";
import Description from "./Description";
import ShoeName from "./ShoeName";
import {
  DEFAULT_ACTIVE_COLOR,
  DEFAULT_ACTIVE_COLOR_HEX,
} from "../../constants";
import { StyledInfoSectionWrapper } from "../../styles";

const Info = ({ activeColor, setColors, activeColorHex }) => {
  return (
    <StyledInfoSectionWrapper>
      <ShoeName {...{ activeColorHex }} />
      <Description />
      <ColorContainer
        {...{
          activeColor,
          setColors,
        }}
      />
      <SizeContainer {...{ activeColorHex }} />
      <BuySection {...{ activeColorHex }} />
    </StyledInfoSectionWrapper>
  );
};

Info.propTypes = {
  activeColor: PropTypes.string,
  setColors: PropTypes.func.isRequired,
  activeColorHex: PropTypes.string,
};

Info.defaultProps = {
  activeColor: DEFAULT_ACTIVE_COLOR,
  activeColorHex: DEFAULT_ACTIVE_COLOR_HEX,
};

export default Info;
