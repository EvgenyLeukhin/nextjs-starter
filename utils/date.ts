export const addMonths = (date: Date, month: number): Date => {
  date.setMonth(date.getMonth() + month);

  return date;
};

export const converToIsoString = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

export const TODAY_DATE = new Date();
export const TODAY_PLUS_MONTH = addMonths(new Date(), 1);
