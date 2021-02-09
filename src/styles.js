import styled, { css, createGlobalStyle } from "styled-components";
import { normalize, position, cover, size, margin } from "polished";

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  body {
    background-color: #efefef;
  }


  .github-fork-ribbon {
    @media (max-width: 1000px) {
      display: none;
    }
  }

  @media (max-width: 490px) {
    svg {
      font-size: 0.8rem;
    }
  }
`;

export const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;
  padding: 40px;

  @media (max-width: 400px) {
    padding: 10px;
  }
`;

export const StyledSection = styled.div`
  border-bottom: 1px solid #dadada;
  padding: 10px 0;

  > h3 {
    color: #3a3a3a;
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;

    @media (max-width: 490px) {
      font-size: 0.9rem;
    }
  }

  > p {
    color: #555;
    font-size: 17px;

    @media (max-width: 490px) {
      font-size: 0.8rem;
    }
  }
`;

export const StyledShoeName = styled(StyledSection)`
  padding-top: 0;

  dl {
    display: flex;
    align-items: center;

    dt {
      color: #333;
      font-size: 2rem;
      font-weight: 700;
      line-height: 1;
      margin-right: 10px;
    }

    dd {
      background: ${({ activeColorHex }) => activeColorHex};
      border-radius: 5px;
      color: #fff;
      padding: 3px 10px;
      text-transform: uppercase;
    }
  }

  h5 {
    color: #444;
    font-weight: 500;
    margin-top: 3px;
    text-transform: capitalize;
  }
`;

export const StyledNikeLogoImg = styled.figure`
  ${position("absolute", "10px", null, null, "10px")};
  width: 100px;

  svg {
    display: block;
    height: 100%;
    fill: #fff;
  }

  @media (max-width: 600px) {
    width: 70px;
  }

  @media (max-width: 490px) {
    width: 60px;
  }
`;

export const StyledProductImg = styled.img`
  ${position("absolute", null, 0, 0, null)};
  opacity: ${({ isvisible }) => (isvisible ? 1 : 0)};
  transform: rotate(-20deg);
  width: 140%;

  @media (max-width: 1070px) {
    width: 135%;
  }

  @media (max-width: 1000px) {
    width: 100%;
    transform: rotate(-5deg) translateY(-50%);
    top: 55%;
    right: 2%;
  }
`;

export const StyledShoeBackground = styled.div`
  position: relative;
  width: 50%;
  height: ${({ shoeBackgroundHeight }) => `${shoeBackgroundHeight || 475}px`};
  box-shadow: -15px 0 35px rgba(0, 0, 0, 0.1), 0 -15px 35px rgba(0, 0, 0, 0.1),
    0 15px 35px rgba(0, 0, 0, 0.1);
  transition: 0.5s;
`;

export const StyledGradientContainer = styled.div`
  ${cover()};
  ${size("100%")};
`;

export const StyledGradientBG = styled.div`
  ${cover()};
  ${size("100%")};
  z-index: ${({ isprevious }) => (isprevious ? -1 : -2)};
  background-image: ${({ gradient }) => gradient};

  @keyframes width {
    from {
      width: 0%;
    }

    to {
      width: 100%;
    }
  }

  ${({ isvisible }) =>
    isvisible &&
    css`
      z-index: 0;
      animation: 0.8s width ease;
    `};
`;

export const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  padding: 8px 0;

  @media (max-width: 340px) {
    justify-content: space-around;
  }
`;

export const UnstyledButton = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;

  background: transparent;

  color: inherit;
  font: inherit;

  line-height: normal;

  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;

  -webkit-appearance: none;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  svg {
    ${size("1em", "0.875em")};
    display: inline-block;
    font-size: inherit;
    overflow: visible;
    vertical-align: -0.125em;
  }
`;

export const SyledSizeButton = styled(UnstyledButton)`
  ${size("40px")};
  align-items: center;
  background: #eee;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  font-size: 1.1rem;
  font-weight: 500;
  justify-content: center;
  margin: 0 10px;

  ${({ isActive }) =>
    isActive &&
    css`
      background: ${({ activeColorHex }) => activeColorHex};
      color: white;
    `}

  @media (max-width: 340px) {
    margin: 0;
  }

  @media (max-width: 490px) {
    ${size("30px")};
    margin: 0 8px;
    font-size: 0.9rem;
    line-height: 30px;
  }
`;

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 860px;

  @media (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
    box-shadow: 0 0 35px 1px rgba(0, 0, 0, 0.2);

    & > div {
      width: 100%;
      box-shadow: none;
    }
  }
`;

export const StyledBrandName = styled.h1`
  color: white;
  font-size: 11rem;
  left: 15px;
  line-height: 0.9;
  opacity: 0.1;
  position: absolute;
  text-transform: uppercase;
  top: 85px;

  @media (max-width: 1000px) {
    top: 20%;
    left: 5%;
  }

  @media (max-width: 490px) {
    font-size: 7rem;
  }
`;

export const StyledInfoSectionWrapper = styled.div`
  background: #fff;
  box-shadow: 15px 0 35px rgba(0, 0, 0, 0.1), 0 -15px 35px rgba(0, 0, 0, 0.1),
    0 15px 35px rgba(0, 0, 0, 0.1);
  width: 50%;
  padding: 35px 40px;
  z-index: 1;

  @media (max-width: 490px) {
    padding: 20px;
  }
`;

export const SyledShareButton = styled(UnstyledButton)`
  ${size("50px")};
  ${position("absolute", "15px", "15px", null, null)};
  align-items: center;
  background: #fff;
  border-radius: 50%;
  color: ${({ activeColorHex }) => activeColorHex};
  display: flex;
  font-size: 1.3rem;
  justify-content: center;
  text-decoration: none;
  transition: 0.5s;
  z-index: 10;

  svg {
    fill: ${({ activeColorHex }) => activeColorHex};
  }

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 600px) {
    ${size("40px")};

    /* svg {
      font-size: 1rem;
    } */
  }

  @media (max-width: 490px) {
    ${size("35px")};
    top: 10px;
    right: 10px;
  }
`;

export const StyledBuySection = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  justify-content: space-between;
`;

export const SyledAddToCardButton = styled(UnstyledButton)`
  background: ${({ activeColorHex }) => activeColorHex};
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.7rem 1rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;

  svg {
    margin-right: 5px;
    fill: #fff;
  }

  @media (max-width: 490px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.8rem;
  }

  &:hover {
    transform: scale(1.1);
  }

  svg {
    margin-right: 5px;

    @media (max-width: 400px) {
      display: none;
    }
  }
`;

export const StyledPriceWrap = styled.div`
  align-items: flex-start;
  color: #333;
  display: flex;

  h1 {
    font-size: 2.1rem;
    font-weight: 600;
    line-height: 1;

    @media (max-width: 490px) {
      font-size: 1.5rem;
    }
  }

  svg {
    height: 1.4rem;
    margin-right: 1px;

    @media (max-width: 490px) {
      height: 0.9rem;
    }
  }
`;

export const SyledColorButton = styled(UnstyledButton)`
  ${size("25px")};
  cursor: pointer;
  border: 5px solid;
  border-radius: 50%;
  margin: 0 10px;
  transition: 0.5s;

  @media (max-width: 490px) {
    ${size("20px")};
    ${margin(null, "20px")};
    border-width: 4px;
  }

  @media (max-width: 340px) {
    margin: 0;
  }

  ${({ color, isActive }) => css`
    background-color: ${color};
    border-color: ${isActive ? "#fff" : color};
  `}

  ${({ isActive }) =>
    isActive &&
    css`
      box-shadow: 0 0 10px 0.5px rgba(0, 0, 0, 0.2);
      transform: scale(1.1);
    `}
`;
