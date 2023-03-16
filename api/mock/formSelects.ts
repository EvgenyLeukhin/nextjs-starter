export type TFormSelectsValues = {
  contryButtonsSelect: string;
  contryButtonsMultiselect: string[] | [];
  contryCheckboxSelect: string;
  contryCheckboxMultiselect: string[] | [];
  check1: boolean;
  check2: boolean;
  check3: boolean;
};

// empty initial values
export const formSelectsEmptyValues: TFormSelectsValues = {
  contryButtonsSelect: '',
  contryButtonsMultiselect: [],
  contryCheckboxSelect: '',
  contryCheckboxMultiselect: [],
  check1: false,
  check2: false,
  check3: false,
};

// initial values from server
export const formSelectsServerValues: TFormSelectsValues = {
  contryButtonsSelect: 'ru',
  contryButtonsMultiselect: ['be', 'kz'],
  contryCheckboxSelect: 'ru',
  contryCheckboxMultiselect: ['ge', 'uz'],
  check1: true,
  check2: false,
  check3: false,
};
