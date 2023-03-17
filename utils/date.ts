export const addMonths = (date: Date, month: number): Date => {
  date.setMonth(date.getMonth() + month);

  return date;
};

// to get date without time
// Fri Mar 17 2023 22:13:09 GMT+0600 (Омск, стандартное время) --> '2023-03-17'
export const converToIsoString = (date: Date): string => {
  return date?.toISOString().split('T')[0];
};

export const TODAY_DATE = new Date();
export const TODAY_PLUS_MONTH = addMonths(new Date(), 1);
