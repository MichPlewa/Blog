export const dateToStr = (date) => {
  return [date.getMonth(), date.getDate(), date.getFullYear()].join('/');
};
