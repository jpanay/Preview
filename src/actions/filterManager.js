const filterManager = (managerListings) => {
  return {
    type: "FILTER_MANAGER",
    payload: managerListings,
  };
};

export default filterManager;
