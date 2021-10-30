const handleAddListing = (newListing) => {
  return {
    type: "ADD_LISTING",
    payload: newListing,
  };
};

export default handleAddListing;
