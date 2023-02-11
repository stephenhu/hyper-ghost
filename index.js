// color

const backgroundColor = "#00182b";
const foregroundColor = "#00ffff";
const borderColor = "#017bda";
const selectionColor = "#008fb3";

// font

const fontSize = "12";
const fontFamily = "monaco";
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
  red: "#ff0000",
  green: "#00ff00",
  yellow: "#ffff00",
  blue: "#0000dd",
  magenta: "#ff6666",
  cyan: "#6666dd",
  white: "#ffffff",
  lightBlack: "#333333",
  lightRed: "#dd0000",
  lightGreen: "#00dd00",
  lightYellow: "#dddd00",
  lightBlue: "#0000dd",
  lightMagenta: "#dd1111",
  lightCyan: "#1111dd",
  lightWhite: "#dddddd",
};

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    selectionColor,
    fontSize,
    fontFamily,
    fontWeight,
    fontWeightBold,
    cursorColor,
    cursorAccentColor,
    cursorShape,
    cursorBlink,
    padding,
    opacity: 0.85,
  });
}
