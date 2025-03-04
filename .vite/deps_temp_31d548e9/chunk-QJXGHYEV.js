import { ButtonBase_default } from "./chunk-F53UXHHP.js";
import { capitalize_default, init_capitalize } from "./chunk-73QSV2FE.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  clsx_default,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  init_clsx,
  init_composeClasses,
  init_extends,
  init_generateUtilityClass,
  init_generateUtilityClasses,
  init_objectWithoutPropertiesLoose,
  init_resolveProps,
  init_styled,
  init_useThemeProps2 as init_useThemeProps,
  require_colorManipulator,
  require_jsx_runtime,
  require_prop_types,
  resolveProps,
  rootShouldForwardProp_default,
  styled_default,
  useThemeProps2 as useThemeProps,
} from "./chunk-7DIJ4C62.js";
import { __toESM, require_react } from "./chunk-45FXRYJS.js";

// node_modules/@mui/material/Button/Button.js
init_objectWithoutPropertiesLoose();
init_extends();
var React3 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_clsx();
init_resolveProps();
init_composeClasses();
var import_colorManipulator = __toESM(require_colorManipulator());
init_styled();
init_useThemeProps();
init_capitalize();

// node_modules/@mui/material/Button/buttonClasses.js
init_generateUtilityClasses();
init_generateUtilityClass();
function getButtonUtilityClass(slot) {
  return generateUtilityClass("MuiButton", slot);
}
var buttonClasses = generateUtilityClasses("MuiButton", [
  "root",
  "text",
  "textInherit",
  "textPrimary",
  "textSecondary",
  "textSuccess",
  "textError",
  "textInfo",
  "textWarning",
  "outlined",
  "outlinedInherit",
  "outlinedPrimary",
  "outlinedSecondary",
  "outlinedSuccess",
  "outlinedError",
  "outlinedInfo",
  "outlinedWarning",
  "contained",
  "containedInherit",
  "containedPrimary",
  "containedSecondary",
  "containedSuccess",
  "containedError",
  "containedInfo",
  "containedWarning",
  "disableElevation",
  "focusVisible",
  "disabled",
  "colorInherit",
  "colorPrimary",
  "colorSecondary",
  "colorSuccess",
  "colorError",
  "colorInfo",
  "colorWarning",
  "textSizeSmall",
  "textSizeMedium",
  "textSizeLarge",
  "outlinedSizeSmall",
  "outlinedSizeMedium",
  "outlinedSizeLarge",
  "containedSizeSmall",
  "containedSizeMedium",
  "containedSizeLarge",
  "sizeMedium",
  "sizeSmall",
  "sizeLarge",
  "fullWidth",
  "startIcon",
  "endIcon",
  "icon",
  "iconSizeSmall",
  "iconSizeMedium",
  "iconSizeLarge",
]);
var buttonClasses_default = buttonClasses;

// node_modules/@mui/material/ButtonGroup/ButtonGroupContext.js
var React = __toESM(require_react());
var ButtonGroupContext = React.createContext({});
if (true) {
  ButtonGroupContext.displayName = "ButtonGroupContext";
}
var ButtonGroupContext_default = ButtonGroupContext;

// node_modules/@mui/material/ButtonGroup/ButtonGroupButtonContext.js
var React2 = __toESM(require_react());
var ButtonGroupButtonContext = React2.createContext(void 0);
if (true) {
  ButtonGroupButtonContext.displayName = "ButtonGroupButtonContext";
}
var ButtonGroupButtonContext_default = ButtonGroupButtonContext;

// node_modules/@mui/material/Button/Button.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var _excluded = [
  "children",
  "color",
  "component",
  "className",
  "disabled",
  "disableElevation",
  "disableFocusRipple",
  "endIcon",
  "focusVisibleClassName",
  "fullWidth",
  "size",
  "startIcon",
  "type",
  "variant",
];
var useUtilityClasses = (ownerState) => {
  const { color, disableElevation, fullWidth, size, variant, classes } =
    ownerState;
  const slots = {
    root: [
      "root",
      variant,
      `${variant}${capitalize_default(color)}`,
      `size${capitalize_default(size)}`,
      `${variant}Size${capitalize_default(size)}`,
      `color${capitalize_default(color)}`,
      disableElevation && "disableElevation",
      fullWidth && "fullWidth",
    ],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${capitalize_default(size)}`],
    endIcon: ["icon", "endIcon", `iconSize${capitalize_default(size)}`],
  };
  const composedClasses = composeClasses(slots, getButtonUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
var commonIconStyles = (ownerState) =>
  _extends(
    {},
    ownerState.size === "small" && {
      "& > *:nth-of-type(1)": {
        fontSize: 18,
      },
    },
    ownerState.size === "medium" && {
      "& > *:nth-of-type(1)": {
        fontSize: 20,
      },
    },
    ownerState.size === "large" && {
      "& > *:nth-of-type(1)": {
        fontSize: 22,
      },
    },
  );
var ButtonRoot = styled_default(ButtonBase_default, {
  shouldForwardProp: (prop) =>
    rootShouldForwardProp_default(prop) || prop === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    return [
      styles.root,
      styles[ownerState.variant],
      styles[`${ownerState.variant}${capitalize_default(ownerState.color)}`],
      styles[`size${capitalize_default(ownerState.size)}`],
      styles[`${ownerState.variant}Size${capitalize_default(ownerState.size)}`],
      ownerState.color === "inherit" && styles.colorInherit,
      ownerState.disableElevation && styles.disableElevation,
      ownerState.fullWidth && styles.fullWidth,
    ];
  },
})(
  ({ theme, ownerState }) => {
    var _theme$palette$getCon, _theme$palette;
    const inheritContainedBackgroundColor =
      theme.palette.mode === "light"
        ? theme.palette.grey[300]
        : theme.palette.grey[800];
    const inheritContainedHoverBackgroundColor =
      theme.palette.mode === "light"
        ? theme.palette.grey.A100
        : theme.palette.grey[700];
    return _extends(
      {},
      theme.typography.button,
      {
        minWidth: 64,
        padding: "6px 16px",
        borderRadius: (theme.vars || theme).shape.borderRadius,
        transition: theme.transitions.create(
          ["background-color", "box-shadow", "border-color", "color"],
          {
            duration: theme.transitions.duration.short,
          },
        ),
        "&:hover": _extends(
          {
            textDecoration: "none",
            backgroundColor: theme.vars
              ? `rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})`
              : (0, import_colorManipulator.alpha)(
                  theme.palette.text.primary,
                  theme.palette.action.hoverOpacity,
                ),
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
              backgroundColor: "transparent",
            },
          },
          ownerState.variant === "text" &&
            ownerState.color !== "inherit" && {
              backgroundColor: theme.vars
                ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})`
                : (0, import_colorManipulator.alpha)(
                    theme.palette[ownerState.color].main,
                    theme.palette.action.hoverOpacity,
                  ),
              // Reset on touch devices, it doesn't add specificity
              "@media (hover: none)": {
                backgroundColor: "transparent",
              },
            },
          ownerState.variant === "outlined" &&
            ownerState.color !== "inherit" && {
              border: `1px solid ${(theme.vars || theme).palette[ownerState.color].main}`,
              backgroundColor: theme.vars
                ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})`
                : (0, import_colorManipulator.alpha)(
                    theme.palette[ownerState.color].main,
                    theme.palette.action.hoverOpacity,
                  ),
              // Reset on touch devices, it doesn't add specificity
              "@media (hover: none)": {
                backgroundColor: "transparent",
              },
            },
          ownerState.variant === "contained" && {
            backgroundColor: theme.vars
              ? theme.vars.palette.Button.inheritContainedHoverBg
              : inheritContainedHoverBackgroundColor,
            boxShadow: (theme.vars || theme).shadows[4],
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
              boxShadow: (theme.vars || theme).shadows[2],
              backgroundColor: (theme.vars || theme).palette.grey[300],
            },
          },
          ownerState.variant === "contained" &&
            ownerState.color !== "inherit" && {
              backgroundColor: (theme.vars || theme).palette[ownerState.color]
                .dark,
              // Reset on touch devices, it doesn't add specificity
              "@media (hover: none)": {
                backgroundColor: (theme.vars || theme).palette[ownerState.color]
                  .main,
              },
            },
        ),
        "&:active": _extends(
          {},
          ownerState.variant === "contained" && {
            boxShadow: (theme.vars || theme).shadows[8],
          },
        ),
        [`&.${buttonClasses_default.focusVisible}`]: _extends(
          {},
          ownerState.variant === "contained" && {
            boxShadow: (theme.vars || theme).shadows[6],
          },
        ),
        [`&.${buttonClasses_default.disabled}`]: _extends(
          {
            color: (theme.vars || theme).palette.action.disabled,
          },
          ownerState.variant === "outlined" && {
            border: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}`,
          },
          ownerState.variant === "contained" && {
            color: (theme.vars || theme).palette.action.disabled,
            boxShadow: (theme.vars || theme).shadows[0],
            backgroundColor: (theme.vars || theme).palette.action
              .disabledBackground,
          },
        ),
      },
      ownerState.variant === "text" && {
        padding: "6px 8px",
      },
      ownerState.variant === "text" &&
        ownerState.color !== "inherit" && {
          color: (theme.vars || theme).palette[ownerState.color].main,
        },
      ownerState.variant === "outlined" && {
        padding: "5px 15px",
        border: "1px solid currentColor",
      },
      ownerState.variant === "outlined" &&
        ownerState.color !== "inherit" && {
          color: (theme.vars || theme).palette[ownerState.color].main,
          border: theme.vars
            ? `1px solid rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.5)`
            : `1px solid ${(0, import_colorManipulator.alpha)(theme.palette[ownerState.color].main, 0.5)}`,
        },
      ownerState.variant === "contained" && {
        color: theme.vars
          ? // this is safe because grey does not change between default light/dark mode
            theme.vars.palette.text.primary
          : (_theme$palette$getCon = (_theme$palette = theme.palette)
                .getContrastText) == null
            ? void 0
            : _theme$palette$getCon.call(
                _theme$palette,
                theme.palette.grey[300],
              ),
        backgroundColor: theme.vars
          ? theme.vars.palette.Button.inheritContainedBg
          : inheritContainedBackgroundColor,
        boxShadow: (theme.vars || theme).shadows[2],
      },
      ownerState.variant === "contained" &&
        ownerState.color !== "inherit" && {
          color: (theme.vars || theme).palette[ownerState.color].contrastText,
          backgroundColor: (theme.vars || theme).palette[ownerState.color].main,
        },
      ownerState.color === "inherit" && {
        color: "inherit",
        borderColor: "currentColor",
      },
      ownerState.size === "small" &&
        ownerState.variant === "text" && {
          padding: "4px 5px",
          fontSize: theme.typography.pxToRem(13),
        },
      ownerState.size === "large" &&
        ownerState.variant === "text" && {
          padding: "8px 11px",
          fontSize: theme.typography.pxToRem(15),
        },
      ownerState.size === "small" &&
        ownerState.variant === "outlined" && {
          padding: "3px 9px",
          fontSize: theme.typography.pxToRem(13),
        },
      ownerState.size === "large" &&
        ownerState.variant === "outlined" && {
          padding: "7px 21px",
          fontSize: theme.typography.pxToRem(15),
        },
      ownerState.size === "small" &&
        ownerState.variant === "contained" && {
          padding: "4px 10px",
          fontSize: theme.typography.pxToRem(13),
        },
      ownerState.size === "large" &&
        ownerState.variant === "contained" && {
          padding: "8px 22px",
          fontSize: theme.typography.pxToRem(15),
        },
      ownerState.fullWidth && {
        width: "100%",
      },
    );
  },
  ({ ownerState }) =>
    ownerState.disableElevation && {
      boxShadow: "none",
      "&:hover": {
        boxShadow: "none",
      },
      [`&.${buttonClasses_default.focusVisible}`]: {
        boxShadow: "none",
      },
      "&:active": {
        boxShadow: "none",
      },
      [`&.${buttonClasses_default.disabled}`]: {
        boxShadow: "none",
      },
    },
);
var ButtonStartIcon = styled_default("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    return [
      styles.startIcon,
      styles[`iconSize${capitalize_default(ownerState.size)}`],
    ];
  },
})(({ ownerState }) =>
  _extends(
    {
      display: "inherit",
      marginRight: 8,
      marginLeft: -4,
    },
    ownerState.size === "small" && {
      marginLeft: -2,
    },
    commonIconStyles(ownerState),
  ),
);
var ButtonEndIcon = styled_default("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    return [
      styles.endIcon,
      styles[`iconSize${capitalize_default(ownerState.size)}`],
    ];
  },
})(({ ownerState }) =>
  _extends(
    {
      display: "inherit",
      marginRight: -4,
      marginLeft: 8,
    },
    ownerState.size === "small" && {
      marginRight: -2,
    },
    commonIconStyles(ownerState),
  ),
);
var Button = React3.forwardRef(function Button2(inProps, ref) {
  const contextProps = React3.useContext(ButtonGroupContext_default);
  const buttonGroupButtonContextPositionClassName = React3.useContext(
    ButtonGroupButtonContext_default,
  );
  const resolvedProps = resolveProps(contextProps, inProps);
  const props = useThemeProps({
    props: resolvedProps,
    name: "MuiButton",
  });
  const {
      children,
      color = "primary",
      component = "button",
      className,
      disabled = false,
      disableElevation = false,
      disableFocusRipple = false,
      endIcon: endIconProp,
      focusVisibleClassName,
      fullWidth = false,
      size = "medium",
      startIcon: startIconProp,
      type,
      variant = "text",
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    color,
    component,
    disabled,
    disableElevation,
    disableFocusRipple,
    fullWidth,
    size,
    type,
    variant,
  });
  const classes = useUtilityClasses(ownerState);
  const startIcon =
    startIconProp &&
    (0, import_jsx_runtime.jsx)(ButtonStartIcon, {
      className: classes.startIcon,
      ownerState,
      children: startIconProp,
    });
  const endIcon =
    endIconProp &&
    (0, import_jsx_runtime.jsx)(ButtonEndIcon, {
      className: classes.endIcon,
      ownerState,
      children: endIconProp,
    });
  const positionClassName = buttonGroupButtonContextPositionClassName || "";
  return (0, import_jsx_runtime2.jsxs)(
    ButtonRoot,
    _extends(
      {
        ownerState,
        className: clsx_default(
          contextProps.className,
          classes.root,
          className,
          positionClassName,
        ),
        component,
        disabled,
        focusRipple: !disableFocusRipple,
        focusVisibleClassName: clsx_default(
          classes.focusVisible,
          focusVisibleClassName,
        ),
        ref,
        type,
      },
      other,
      {
        classes,
        children: [startIcon, children, endIcon],
      },
    ),
  );
});
true
  ? (Button.propTypes = {
      // ┌────────────────────────────── Warning ──────────────────────────────┐
      // │ These PropTypes are generated from the TypeScript type definitions. │
      // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
      // └─────────────────────────────────────────────────────────────────────┘
      /**
       * The content of the component.
       */
      children: import_prop_types.default.node,
      /**
       * Override or extend the styles applied to the component.
       */
      classes: import_prop_types.default.object,
      /**
       * @ignore
       */
      className: import_prop_types.default.string,
      /**
       * The color of the component.
       * It supports both default and custom theme colors, which can be added as shown in the
       * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
       * @default 'primary'
       */
      color: import_prop_types.default.oneOfType([
        import_prop_types.default.oneOf([
          "inherit",
          "primary",
          "secondary",
          "success",
          "error",
          "info",
          "warning",
        ]),
        import_prop_types.default.string,
      ]),
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: import_prop_types.default.elementType,
      /**
       * If `true`, the component is disabled.
       * @default false
       */
      disabled: import_prop_types.default.bool,
      /**
       * If `true`, no elevation is used.
       * @default false
       */
      disableElevation: import_prop_types.default.bool,
      /**
       * If `true`, the  keyboard focus ripple is disabled.
       * @default false
       */
      disableFocusRipple: import_prop_types.default.bool,
      /**
       * If `true`, the ripple effect is disabled.
       *
       * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
       * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
       * @default false
       */
      disableRipple: import_prop_types.default.bool,
      /**
       * Element placed after the children.
       */
      endIcon: import_prop_types.default.node,
      /**
       * @ignore
       */
      focusVisibleClassName: import_prop_types.default.string,
      /**
       * If `true`, the button will take up the full width of its container.
       * @default false
       */
      fullWidth: import_prop_types.default.bool,
      /**
       * The URL to link to when the button is clicked.
       * If defined, an `a` element will be used as the root node.
       */
      href: import_prop_types.default.string,
      /**
       * The size of the component.
       * `small` is equivalent to the dense button styling.
       * @default 'medium'
       */
      size: import_prop_types.default.oneOfType([
        import_prop_types.default.oneOf(["small", "medium", "large"]),
        import_prop_types.default.string,
      ]),
      /**
       * Element placed before the children.
       */
      startIcon: import_prop_types.default.node,
      /**
       * The system prop that allows defining system overrides as well as additional CSS styles.
       */
      sx: import_prop_types.default.oneOfType([
        import_prop_types.default.arrayOf(
          import_prop_types.default.oneOfType([
            import_prop_types.default.func,
            import_prop_types.default.object,
            import_prop_types.default.bool,
          ]),
        ),
        import_prop_types.default.func,
        import_prop_types.default.object,
      ]),
      /**
       * @ignore
       */
      type: import_prop_types.default.oneOfType([
        import_prop_types.default.oneOf(["button", "reset", "submit"]),
        import_prop_types.default.string,
      ]),
      /**
       * The variant to use.
       * @default 'text'
       */
      variant: import_prop_types.default.oneOfType([
        import_prop_types.default.oneOf(["contained", "outlined", "text"]),
        import_prop_types.default.string,
      ]),
    })
  : void 0;
var Button_default = Button;

export {
  getButtonUtilityClass,
  buttonClasses_default,
  ButtonGroupContext_default,
  ButtonGroupButtonContext_default,
  Button_default,
};
//# sourceMappingURL=chunk-QJXGHYEV.js.map
