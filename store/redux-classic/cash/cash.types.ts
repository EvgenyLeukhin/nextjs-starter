export type TCashState = {
  cash: number;
};

export type TActionCash = {
  type: 'CASH_ADD' | 'CASH_GET';
  payload: number;
};
