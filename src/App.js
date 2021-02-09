import React, { useEffect, useState, createRef } from "react";
import Info from "./components/Info";

import {
  DEFAULT_COLORS,
  DEFAULT_ACTIVE_COLOR,
  DEFAULT_ACTIVE_COLOR_HEX,
  DEFAULT_BACKGROUND_SIZE,
} from "./constants";
import { StyledContainer, StyledCard } from "./styles";
import ShoeBackground from "./components/ShoeBackground";

import "typeface-poppins";

const App = () => {
  const [shoeBackgroundHeight, setShoeBackgroundHeight] = useState(
    DEFAULT_BACKGROUND_SIZE
  );

  const shoeRefs = Object.keys(DEFAULT_COLORS).reduce((all, color) => {
    return {
      ...all,
      [color]: createRef(null),
    };
  }, {});

  const [colors, setColors] = useState({
    activeColor: DEFAULT_ACTIVE_COLOR,
    activeColorHex: DEFAULT_ACTIVE_COLOR_HEX,
    prevColor: null,
  });

  useEffect(() => {
    const { current: shoe = null } =
      shoeRefs[DEFAULT_ACTIVE_COLOR] && shoeRefs[DEFAULT_ACTIVE_COLOR];

    // for responsive behaviour
    const changeHeight = () => {
      const { matches } = window.matchMedia("(max-width:1000px)");
      const shoeHeight = (shoe && shoe.offsetHeight) || 0;

      setShoeBackgroundHeight(() => {
        if (matches) {
          if (shoeHeight === 0) {
            try {
              setTimeout(changeHeight, 50);
            } catch (error) {
              alert("Something is Wrong!!");
            }
          }

          return shoeHeight * 0.9;
        }

        return DEFAULT_BACKGROUND_SIZE;
      });
    };

    changeHeight();
    window.addEventListener("resize", changeHeight);
    return () => window.removeEventListener("resize", changeHeight);
  }, [shoeRefs]);

  return (
    <StyledContainer>
      <StyledCard>
        <ShoeBackground
          {...{
            ...colors,
            shoeRefs,
            shoeBackgroundHeight,
          }}
        />
        <Info
          {...{
            ...colors,
            setColors,
          }}
        />
      </StyledCard>
    </StyledContainer>
  );
};

export default App;
