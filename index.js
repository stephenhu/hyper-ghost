const BRIGHT_TEAL      = "#96eaea";
const TEAL             = "#001115";
const DARK_TEAL        = "#013b49";
const BLACK            = "#000000";


exports.decorateConfig = (config) => {
  return Object.assign({}, config {
    borderColor: DARK_TEAL,
    cursorColor: BRIGHT_TEAL,
    foregroundColor: TEAL,
    backgroundColor: BLACK,
    opacity: 0.85,
  });
}
