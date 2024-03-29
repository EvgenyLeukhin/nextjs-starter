export type TFormDatepickerValues = {
  date_range: (string | null)[];
};

// empty initial values
export const formDatepickerEmptyValues: TFormDatepickerValues = {
  date_range: [null, null],
};

// initial values from server
export const formDatepickerServerValues: TFormDatepickerValues = {
  date_range: ['2023-03-20T00:00:00.000Z', '2023-03-25T00:00:00.000Z'],
};
