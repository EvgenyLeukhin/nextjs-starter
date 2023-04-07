export type TCashtStore = {
  cash: number;
};

export type TActionCash = {
  type: 'CASH_ADD' | 'CASH_GET';
  payload: number;
};
