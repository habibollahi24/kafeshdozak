export const totalCartCount = (arr) => {
  return arr.reduce((prevValue, currentValue) => {
    return prevValue + currentValue.quantity;
  }, 0);
};
export const totalCartPrice = (arr) => {
  return arr.reduce((prevValue, currentValue) => {
    return prevValue + currentValue.quantity * currentValue.price;
  }, 0);
};
