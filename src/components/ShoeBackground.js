import React from "react";
import PropTypes from "prop-types";
import {
  DEFAULT_COLORS,
  DEFAULT_ACTIVE_COLOR,
  BG_GRAIDENTS,
  DEFAULT_BACKGROUND_SIZE,
  DEFAULT_ACTIVE_COLOR_HEX,
} from "../constants";
import {
  StyledProductImg,
  StyledGradientBG,
  StyledGradientContainer,
  StyledShoeBackground,
  StyledBrandName,
  SyledShareButton,
} from "../styles";
import Logo from "./Logo";
import { IconShare } from "./Icons";

const ShoeBackground = ({
  activeColor,
  prevColor,
  shoeRefs,
  shoeBackgroundHeight,
  activeColorHex,
}) => (
  <StyledShoeBackground shoeBackgroundHeight={shoeBackgroundHeight}>
    <StyledGradientContainer>
      {Object.keys(DEFAULT_COLORS).map(color => {
        return (
          <StyledGradientBG
            key={`gradient-${color}`}
            color={color}
            gradient={BG_GRAIDENTS[color]}
            isprevious={color === prevColor}
            isvisible={color === activeColor}
          />
        );
      })}
    </StyledGradientContainer>
    <StyledBrandName>nike</StyledBrandName>
    <Logo />
    <SyledShareButton {...{ activeColorHex }} type="button">
      <IconShare />
    </SyledShareButton>
    {Object.keys(DEFAULT_COLORS).map(color => {
      return (
        <StyledProductImg
          key={`ProductImages-${color}`}
          ref={shoeRefs[color]}
          alt={`${color} shoe`}
          color={`${color}`}
          isvisible={color === activeColor}
          src={require(`../img/${color}.png`)}
        />
      );
    })}
  </StyledShoeBackground>
);

ShoeBackground.propTypes = {
  activeColor: PropTypes.string,
  prevColor: PropTypes.string,
  shoeRefs: PropTypes.shape({}).isRequired,
  shoeBackgroundHeight: PropTypes.number,
  activeColorHex: PropTypes.string,
};

ShoeBackground.defaultProps = {
  activeColor: DEFAULT_ACTIVE_COLOR,
  prevColor: null,
  shoeBackgroundHeight: DEFAULT_BACKGROUND_SIZE,
  activeColorHex: DEFAULT_ACTIVE_COLOR_HEX,
};

export default ShoeBackground;
