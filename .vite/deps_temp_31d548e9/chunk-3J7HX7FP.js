import { init_utils, usePreviousProps_default } from "./chunk-CZIZNHAF.js";

// node_modules/@mui/base/useBadge/useBadge.js
init_utils();
function useBadge(parameters) {
  const {
    badgeContent: badgeContentProp,
    invisible: invisibleProp = false,
    max: maxProp = 99,
    showZero = false,
  } = parameters;
  const prevProps = usePreviousProps_default({
    badgeContent: badgeContentProp,
    max: maxProp,
  });
  let invisible = invisibleProp;
  if (invisibleProp === false && badgeContentProp === 0 && !showZero) {
    invisible = true;
  }
  const { badgeContent, max = maxProp } = invisible ? prevProps : parameters;
  const displayValue =
    badgeContent && Number(badgeContent) > max ? `${max}+` : badgeContent;
  return {
    badgeContent,
    invisible,
    max,
    displayValue,
  };
}

export { useBadge };
//# sourceMappingURL=chunk-3J7HX7FP.js.map
