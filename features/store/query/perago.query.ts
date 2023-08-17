import { apiSlice } from '../../../store/app.api';

const peragoApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getKeys: build.query<any, unknown>({
      query: () => ({
        url: `/api/getKeys`,
        method: 'GET',
        // params: '',
      }),
      providesTags: ['posts'],
    }),
    getAm: build.query<any, unknown>({
      query: () => ({
        url: `/api/getam`,
        method: 'GET',
        // params: '',
      }),
      providesTags: ['posts'],
    }),
    updateData: build.mutation<any, unknown>({
      query: (data: { data: any }) => {
        console.log("test1234")
        console.log('dataasdasdas', data);
        return {
          url: `/api/update`,
          method: 'POST',
          body: data.data,
        };
      },
      invalidatesTags: ['posts'],
    }),
    newData: build.mutation<any, unknown>({
      query: (data: { data: any }) => {
        return {
          url: `/api/new`,
          method: 'POST',
          data: data.data,
        };
      },
      invalidatesTags: ['posts'],
    }),
  }),
});

export const {
  useGetKeysQuery,
  useGetAmQuery,
  useUpdateDataMutation,
  useNewDataMutation,
} = peragoApi;
