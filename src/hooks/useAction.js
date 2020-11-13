import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export default (type) => {
  const dispatch = useDispatch();

  return useCallback((payload = {}) => dispatch({ type, payload }), [
    dispatch,
    type,
  ]);
};
