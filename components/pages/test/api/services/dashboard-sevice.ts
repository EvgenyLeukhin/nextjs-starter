import { AxiosResponse } from 'axios';
import httpClient from '../httpClient';

export type TGetDrugstoresParams = {
  page: number;
  limit: number;
};

export const dashboardService = {
  // getDrugstores
  getDrugstores(
    getDrugstoresParams: TGetDrugstoresParams,
  ): Promise<AxiosResponse> {
    const { page = 1, limit = 50 } = getDrugstoresParams;

    return (
      httpClient
        .get(`drugstores`, { params: { page, limit } })

        // getDrugstores error
        .catch(error => error)
    );
  },
};
