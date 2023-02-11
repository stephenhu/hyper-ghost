// color

const backgroundColor = "#00182b";
const foregroundColor = "#00ffff";
const borderColor = "#00182b";
const selectionColor = "#008fb3";

// font

const fontSize = "12";
const fontWeight = "normal";
const fontWeightBold = "Bold";

// cursor

const cursorColor = "#ff66cc";
const cursorAccentColor = "#ff66cc";
const cursorShape = "UNDERLINE";
const cursorBlink = "false";

const padding = "10px 15px";

const colors = {
  black: "#000000",
  red: "#ff5370",
  green: "#c3e88d",
  yellow: "#ffcb6b",
  blue: "#82aaff",
  magenta: "#c792ea",
  cyan: "#80cbc4",
  white: "#d0d0d0",
  lightBlack: "#5c7e8c",
  lightRed: "#f77669",
  lightGreen: "#c3e88d",
  lightYellow: "#ffeb95",
  lightBlue: "#b2ccd6",
  lightMagenta: "#ab92ea",
  lightCyan: "#80cbc4",
  lightWhite: "#eeffff",
};

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    selectionColor,
    fontSize,
    fontWeight,
    fontWeightBold,
    cursorColor,
    cursorAccentColor,
    cursorShape,
    cursorBlink,
    padding,
    colors,
    opacity: 0.85,
  });
}
