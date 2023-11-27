// Products.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get('https://northwind.vercel.app/api/categories');
        setData(response.data);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '20px', paddingTop: '100px', paddingBottom: '50px' }}>
      {data.map((item) => (
        <Link to={`/products/${item.id}`} key={item.id}>
          <div style={{ width: '400px', height: '400px', border: '1px solid #000', textAlign: 'center' }}>
            <h5>{item.name}</h5>
            <h6>{item.description}</h6>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
