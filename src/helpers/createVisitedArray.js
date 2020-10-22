const createArrayWithFalseValues = (rows, cols) => {
  return Array.from({ length: rows }, () => Array.from({ length: cols }, () => false));
};

export default createArrayWithFalseValues;
