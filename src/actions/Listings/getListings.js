const getListings = (Listings) => {
  console.log(Listings);
  return {
    type: "GET_LISTINGS",
    payload: Listings,
  };
};

export default getListings;
