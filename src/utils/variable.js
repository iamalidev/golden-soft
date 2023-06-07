// Colors

const blue = "#4295E4";
const lightBlue = "#F2F8FF";
const darkBlue = "#0D2436";
const black = "#161C24";
const gray = "#454F5B";
const white = "#FFFFFF";
const lightGray = "#fafafa";

const colors = {
  blue,
  lightBlue,
  darkBlue,
  black,
  gray,
  white,
  lightGray,
};

export const adaptiveValue = (property, startSize, minSize) => {
  const addSize = startSize - minSize;
  return `
		${property}: ${startSize}px;
		@media (max-width: 1440px) {
			${property}: calc(${minSize}px + ${addSize} * ((100vw - 420px) / (1440 - 420)));
		}
`;
};

export default colors;
