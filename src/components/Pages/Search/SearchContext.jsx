import { createContext } from 'react';

const SearchContext = createContext({
  buy: false,
  setBuy: () => {},
  rent: false,
  setRent: () => {},
  lease: false,
  setLease: () => {},
  priceFilter: { minPrice: 0, maxPrice: 0 },
  setPriceFilter: () => {},
});

export default SearchContext;
