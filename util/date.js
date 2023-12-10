export const getFormattedDate = (date) => {
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};

export const date7DaysAgo = () => {
  let todayDate = new Date();

  let lastSevenDays = new Date(
    todayDate.getFullYear(),
    todayDate.getMonth(),
    todayDate.getDate() - 7
  );

  return lastSevenDays;
};
