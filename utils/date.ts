export const addMonths = (date: Date, month: number): Date => {
  date.setMonth(date.getMonth() + month);

  return date;
};

export const converToIsoString = (date: Date): string => {
  return date.toISOString().split('T')[0];
};
