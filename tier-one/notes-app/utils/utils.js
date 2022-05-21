const getTodaysDate = () => {
  return new Date().toLocaleDateString("en-US");
};

export { getTodaysDate };
