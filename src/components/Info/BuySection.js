import React from "react";
import PropTypes from "prop-types";
import {
  StyledBuySection,
  SyledAddToCardButton,
  StyledPriceWrap,
} from "../../styles";
import { DEFAULT_ACTIVE_COLOR_HEX } from "../../constants";
import { IconCart, IconDollarSign } from "../Icons";

const BuySection = ({ activeColorHex }) => {
  return (
    <StyledBuySection>
      <SyledAddToCardButton {...{ activeColorHex }} type="button">
        <IconCart />
        Add to card
      </SyledAddToCardButton>
      <StyledPriceWrap className="price">
        <IconDollarSign />
        <h1>149.99</h1>
      </StyledPriceWrap>
    </StyledBuySection>
  );
};

BuySection.propTypes = {
  activeColorHex: PropTypes.string,
};

BuySection.defaultProps = {
  activeColorHex: DEFAULT_ACTIVE_COLOR_HEX,
};

export default BuySection;
