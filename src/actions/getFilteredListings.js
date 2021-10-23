const getFilteredListings = (Listings) => {
  return {
    type: "FILTER_LISTINGS",
    payload: Listings,
  };
};

export default getFilteredListings;
