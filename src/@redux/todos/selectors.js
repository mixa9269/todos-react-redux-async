import { createSelector } from '@reduxjs/toolkit';
import { denormalize } from 'utils/normalizeById';
import { SUCCESS } from 'consts/index';

export const rootSelector = createSelector(
  (state) => state,
  (state) => state.todos
);

export const isFetchedSelector = createSelector(
  rootSelector,
  ({ status }) => status === SUCCESS
);

export const collectionSelector = createSelector(
  rootSelector,
  ({ collection }) => denormalize(collection)
);
