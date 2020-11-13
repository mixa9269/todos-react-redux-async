import { createSelector } from '@reduxjs/toolkit';
import { SUCCESS } from 'consts/index';

export const rootSelector = createSelector(
  (state) => state,
  (state) => state.todos
);

export const isFetchedSelector = createSelector(
  rootSelector,
  ({ status }) => status === SUCCESS
);
