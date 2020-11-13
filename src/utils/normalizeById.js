export const normalize = (list) =>
  list.reduce((acc, item) => {
    acc[item.id] = item;

    return acc;
  }, {});

export const denormalize = (collection) =>
  Object.keys(collection).map((id) => collection[id]);
