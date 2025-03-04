import {
  defaultTheme_default,
  identifier_default,
  init_defaultTheme,
  init_identifier,
  useTheme_default,
} from "./chunk-7DIJ4C62.js";
import { __toESM, require_react } from "./chunk-45FXRYJS.js";

// node_modules/@mui/material/styles/getOverlayAlpha.js
var getOverlayAlpha = (elevation) => {
  let alphaValue;
  if (elevation < 1) {
    alphaValue = 5.11916 * elevation ** 2;
  } else {
    alphaValue = 4.5 * Math.log(elevation + 1) + 2;
  }
  return (alphaValue / 100).toFixed(2);
};
var getOverlayAlpha_default = getOverlayAlpha;

// node_modules/@mui/material/styles/useTheme.js
var React = __toESM(require_react());
init_defaultTheme();
init_identifier();
function useTheme() {
  const theme = useTheme_default(defaultTheme_default);
  if (true) {
    React.useDebugValue(theme);
  }
  return theme[identifier_default] || theme;
}

export { getOverlayAlpha_default, useTheme };
//# sourceMappingURL=chunk-FVZ2FESL.js.map
