const size = {
  ["360x740"]: { width: "360px", height: "740px" },
  [375]: "375px",
  ["390x844"]: { width: "390px", height: "844px" },
  [393]: `393px`,
  [412]: "412px",
  ["430x932"]: { width: "430px", height: "932px" },
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1400px",
};

export const device = {
  ["360x740"]: `(min-width: ${size["360x740"].width}) and (max-height: ${size["360x740"].height}) and (orientation: portrait)`,
  [375]: `(min-width: ${size[375]})`,
  ["390x844"]: `(min-width: ${size["390x844"].width}) and (max-height: ${size["390x844"].height}) and (orientation: portrait)`,
  [393]: `(min-width: ${size[393]})`,
  [412]: `(min-width: ${size[412]})`,
  ["430x932"]: `(min-width: ${size["430x932"].width}) and (max-height: ${size["430x932"].height}) and (orientation: portrait)`,
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
  xxl: `(min-width: ${size.xxl})`,
};
