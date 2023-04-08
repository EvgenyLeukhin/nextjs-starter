export type TCountStore = {
  counter: number;
};

export type TActionCount = {
  type: 'COUNTER_PLUS' | 'COUNTER_MINUS' | 'COUNTER_CHANGE' | 'COUNTER_RESET';
  payload?: number;
};
