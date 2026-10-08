import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/products/ProductsActions";

function ProductsContainer() {
  const { products, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div>
      {loading && <h3>Loading...</h3>}
      {error && <h3>{error.message}</h3>}
      {products.length > 0 && (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductsContainer;
