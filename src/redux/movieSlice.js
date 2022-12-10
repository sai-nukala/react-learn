import { createSlice } from '@reduxjs/toolkit';

const initialState = Object.freeze({
  value: [],
  totalAmount: 0,
  offset: 0,
  pageOffset: 6,
  limit: 100,
  pending: false,
  error: null,
  editError: null,
  sortBy: 'release_date',
  current: {},
  search: '',
  currentGenre: 'all',
});

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    fetchPending: (state) => {
      state.pending = true;
    },
    fetchCreate: (state) => {
      state.pending = true;
    },
    fetchUpdate: (state) => {
      state.pending = true;
    },
    fetchDelete: (state) => {
      state.pending = true;
    },
    fetchError: (state, { payload }) => {
      state.pending = false;
      state.error = payload;
    },
    fetchEditError: (state, { payload }) => {
      state.pending = false;
      state.editError = payload;
    },
    fetchGetSuccess: (state, { payload }) => {
      state.pending = false;
      state.value = payload?.value;
      state.totalAmount = payload?.totalAmount;
      state.offset = payload?.offset;
      state.limit = payload?.limit;
    },
    setCurrent: (state, { payload }) => {
      if (payload !== null && payload !== undefined) {
        state.current = payload;
      }
    },
    unsetCurrent: (state) => {
      state.current = undefined;
    },
    fetchCreateSuccess: (state, { payload }) => {
      state.value = [...state.value, payload];
      state.editError = null;
    },
    fetchUpdateSuccess: (state, { payload }) => {
      state.pending = false;
      state.editError = null;
      const cardsWithoutEdited = state.value.filter((card) => card.id !== payload.id);
      state.value = [...cardsWithoutEdited, payload];
    },
    fetchDeleteSuccess: (state) => {
      state.pending = false;
    },
    updateSortBy: (state, { payload }) => {
      state.sortBy = payload;
    },
    updateCurrentGenre: (state, { payload }) => {
      state.currentGenre = payload;
    },
    updateSearchInput: (state, { payload }) => {
      state.search = payload;
    },
  },
});
export const {
  fetchDelete,
  fetchError,
  fetchPending,
  fetchGetSuccess,
  fetchCreate,
  fetchCreateSuccess,
  fetchUpdateSuccess,
  fetchUpdate,
  fetchEditError,
  fetchDeleteSuccess,
  updateSortBy,
  updateCurrentGenre,
  updateSearchInput,
} = moviesSlice.actions;

export default moviesSlice.reducer;
