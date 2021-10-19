const getListings = (Listings) => {
  return {
    type: "GET_LISTINGS",
    payload: Listings,
  };
};

export default getListings;
