import React, { useState } from 'react';

export default function Filter({ data, handleFilter }) {
  const groupBy = (arr, criteria) =>
    arr.reduce((acc, item) => {
      const key = item[criteria];
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    }, {});

  const categories = ['All', ...Object.keys(groupBy(data, 'category'))];
  const [category, setCategory] = useState('All');
  const [price, setPrice] = useState('All');
  const [rating, setRating] = useState('All');

  const handleSubmit = () => {
    handleFilter({ category, price, rating });
  };

  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div>
        <label className="form-label">Category</label>
        <select
          className="form-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat, index) => (
            <option value={cat} key={index}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="form-label">Price ($)</label>
        <select
          className="form-select"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        >
          <option value="All">All</option>
          <option value="50">Up to $50</option>
          <option value="100">Up to $100</option>
          <option value="200">Up to $200</option>
        </select>
      </div>

      <div>
        <label className="form-label">Rating</label>
        <select
          className="form-select"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="All">All</option>
          <option value="1">1 Star & Above</option>
          <option value="2">2 Stars & Above</option>
          <option value="3">3 Stars & Above</option>
          <option value="4">4 Stars & Above</option>
        </select>
      </div>

      <div>
        <button className="btn btn-primary mt-4" onClick={handleSubmit}>
          Apply Filters
        </button>
      </div>
    </div>
  );
}
