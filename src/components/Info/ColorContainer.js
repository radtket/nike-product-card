import React from "react";
import PropTypes from "prop-types";
import { DEFAULT_COLORS, DEFAULT_ACTIVE_COLOR } from "../../constants";
import { StyledSection, StyledNav, SyledColorButton } from "../../styles";

const ColorContainer = ({ setColors, activeColor }) => {
  return (
    <StyledSection>
      <h3>Color</h3>
      <StyledNav>
        {Object.entries(DEFAULT_COLORS).map(([color, primary]) => {
          const isActive = color === activeColor;
          return (
            <SyledColorButton
              key={`ColorContainer-${color}`}
              type="button"
              {...{ isActive }}
              color={primary}
              onClick={() => {
                setColors(prev => {
                  return {
                    prevColor: prev.activeColor,
                    activeColor: color,
                    activeColorHex: primary,
                  };
                });
              }}
            />
          );
        })}
      </StyledNav>
    </StyledSection>
  );
};

ColorContainer.propTypes = {
  activeColor: PropTypes.string,
  setColors: PropTypes.func.isRequired,
  prevColor: PropTypes.string,
};

ColorContainer.defaultProps = {
  activeColor: DEFAULT_ACTIVE_COLOR,
  prevColor: null,
};

export default ColorContainer;
