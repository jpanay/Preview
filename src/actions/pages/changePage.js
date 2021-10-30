const changePage = (newPage) => {
  return {
    type: "CHANGE_PAGE",
    payload: newPage,
  };
};

export default changePage;
