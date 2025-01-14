import React, { useState, useEffect, useContext } from 'react';
import { REACT_APP_PRODUCTS_API } from '../utils';
import { userContext } from '../context/UserContext';
import Filter from './Filter';
import HeaderCarousel from './HeaderCarousel';
import Banner from './Banner';
import ProductGrid from './ProductGrid';
import Checkout from './Checkout';

export default function Shop() {
  const [data, setData] = useState([]); // Full product list
  const [filterData, setFilterData] = useState([]); // Filtered product list
  const [searchTerm, setSearchTerm] = useState(''); // Search term
  const { setIsLoggedIn } = useContext(userContext);

  useEffect(() => {
    const fetchData = async () => {
      const storedProducts = localStorage.getItem('products');
      if (storedProducts) {
        const parsedProducts = JSON.parse(storedProducts);
        setData(parsedProducts);
        setFilterData(parsedProducts);
      } else {
        try {
          const response = await fetch(REACT_APP_PRODUCTS_API);
          const result = await response.json();
          setData(result);
          setFilterData(result);
          localStorage.setItem('products', JSON.stringify(result));
        } catch (error) {
          console.error('Error fetching products:', error);
          alert('Failed to load products. Try again later.');
        }
      }
    };

    fetchData();
    setIsLoggedIn(localStorage.getItem('login'));
  }, [setIsLoggedIn]);

  const handleFilter = (filters) => {
    const { category, price, rating } = filters;

    let filtered = [...data]; // Copy the original product list

    // Filter by category
    if (category && category !== 'All') {
      filtered = filtered.filter((product) => product.category === category);
    }

    // Filter by price
    if (price && price !== 'All') {
      const maxPrice = parseInt(price, 10);
      filtered = filtered.filter((product) => product.price <= maxPrice);
    }

    // Filter by rating
    if (rating && rating !== 'All') {
      const minRating = parseInt(rating, 10);
      filtered = filtered.filter((product) => product.rating?.rate >= minRating);
    }

    setFilterData(filtered); // Update filtered product list
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredProducts = data.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterData(filteredProducts);
  };

  return (
    <div className="container py-5">
      {/* Header and Banner */}
      {/* <HeaderCarousel /> */}
      {/* <Banner /> */}

      {/* Filter Component */}
      <Filter data={data} handleFilter={handleFilter} />

      {/* Search Bar */}
      <form className="mb-4 p-5" onSubmit={handleSearch}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
          />
          <button type="submit" className="btn btn-primary mt-4 ">
            Search
          </button>
        </div>
      </form>
       {/* <Checkout/> */}
      {/* Product Grid */}
      <ProductGrid data={filterData} />
    </div>
  );
}
