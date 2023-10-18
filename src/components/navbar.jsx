import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import SearchBar from './searchbar';
import { SearchProvider, useSearch, SearchContext } from './search'; // Import the context

import './n.css';

export const Navbar = () => {
  const { setSearchTerm } = useContext(SearchContext);
  const [searchTermState, setSearchTermState] = useState('');

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    setSearchTermState(searchTerm);
  };

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={40} />
        </Link>
      </div>
      <SearchBar onSearch={handleSearch} className="search" />
    </div>
  );
};
