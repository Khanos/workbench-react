export const findInterception = (arr1, arr2) => {
  return arr1.filter(item => arr2.includes(item));
};

export const findDivergency = (arr1, arr2) => {
  return arr1.filter(item => !arr2.includes(item));
}