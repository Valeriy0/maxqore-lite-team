export const shortenAddress = (address, chars = 4) => {
  try {
    return `${address.substring(0, chars + 2)}...${address.substring(42 - chars)}`;
  } catch (error) {
    // throw Error(`Invalid 'address' parameter '${address}'.`);
  }
};
