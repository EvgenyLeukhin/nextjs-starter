export type TAxiosErrorData = {
  message: string;
  name: string;
  statusCode: number;
};

export type TAxiosErrorResponse = {
  code: string;
  message: string;
  name: string;
  response: {
    status: number;
    statusText: string;
    data: {
      error: TAxiosErrorData;
    };
  };
};

export type TPagination = {
  rowsToShow: number;
  paginationActivePage: number;
};
