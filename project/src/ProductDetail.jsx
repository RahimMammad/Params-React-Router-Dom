// ProductDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(`https://northwind.vercel.app/api/categories/${productId}`);
        setProduct(response.data);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [productId]);

  return (
    <div style={{ width: '600px', height: '600px', border: '1px solid #000', textAlign: 'center' }}>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
