import React, { useState } from "react";
import PropTypes from "prop-types";
import { DEFAULT_SHOE_SIZES, DEFAULT_ACTIVE_COLOR_HEX } from "../../constants";
import { StyledSection, StyledNav, SyledSizeButton } from "../../styles";

const SizeContainer = ({ activeColorHex }) => {
  const [activeShoeSize, setActiveShoeSize] = useState(DEFAULT_SHOE_SIZES[0]);
  return (
    <StyledSection
      style={{
        marginBottom: "10px",
      }}
    >
      <h3>Size</h3>
      <StyledNav>
        {DEFAULT_SHOE_SIZES.map(size => {
          return (
            <SyledSizeButton
              key={`size-${size}`}
              isActive={size === activeShoeSize}
              onClick={() => {
                setActiveShoeSize(size);
              }}
              {...{ activeColorHex }}
              type="button"
            >
              {size}
            </SyledSizeButton>
          );
        })}
      </StyledNav>
    </StyledSection>
  );
};

SizeContainer.propTypes = {
  activeColorHex: PropTypes.string,
};

SizeContainer.defaultProps = {
  activeColorHex: DEFAULT_ACTIVE_COLOR_HEX,
};

export default SizeContainer;
