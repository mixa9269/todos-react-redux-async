import { createSelector } from '@reduxjs/toolkit';
import { denormalize } from 'utils/normalizeById';
import { SUCCESS, ALL, COMPLETED } from 'consts';

export const rootSelector = createSelector(
  (state) => state,
  (state) => state.todos
);

export const isFetchedSelector = createSelector(
  rootSelector,
  ({ status }) => status === SUCCESS
);

export const listSelector = createSelector(rootSelector, ({ collection }) =>
  denormalize(collection).sort((a, b) => b.id - a.id)
);

export const filterSelector = createSelector(
  rootSelector,
  ({ filter }) => filter
);

export const filtredListSelector = createSelector(
  [listSelector, filterSelector],
  (list, filter) => {
    if (filter === ALL) {
      return list;
    }

    const cond = filter === COMPLETED;

    return list.filter(({ completed }) => completed === cond);
  }
);

export const newTodoSelector = createSelector(
  rootSelector,
  ({ newTodo }) => newTodo
);

export const activeCountSelector = createSelector(
  listSelector,
  (collection) => collection.filter(({ completed }) => !completed).length
);
