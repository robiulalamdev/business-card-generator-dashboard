import { api } from "../../api/apiSlice";

const ticketApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createTicket: builder.mutation({
      query: ({ data }) => ({
        url: `/tickets/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["tickets"],
    }),

    getTickets: builder.query({
      query: () => `/tickets`,
      providesTags: ["tickets"],
    }),

    getTicketById: builder.query({
      query: (id) => `/tickets/${id}`,
      providesTags: ["tickets"],
    }),
  }),
});

export const {
  useCreateTicketMutation,
  useGetTicketsQuery,
  useGetTicketByIdQuery,
} = ticketApi;
