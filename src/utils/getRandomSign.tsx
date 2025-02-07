const specialSignsArr = ["!", "@", "#", "$", "%", "&", "*", "(", ")", "=", "+", "[", "]", "{", "}", "~", "€", "£", "¥", "¢"];

export const getRandomSign = () => {
  return specialSignsArr[Math.floor(Math.random() * specialSignsArr.length)];
};
