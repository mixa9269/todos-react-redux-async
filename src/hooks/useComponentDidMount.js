import { useEffect } from 'react';

const useComponentDidMount = (func) => useEffect(func, [func]);

export default useComponentDidMount;
