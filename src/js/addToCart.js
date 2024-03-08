import React, { useState } from 'react';

function Cart() {
  const [productsInCart, setProductsInCart] = useState([]);
  
  const addToCart = (id, productInCart, products) => {
    // Tìm kiếm xem sản phẩm đã có trong giỏ hàng chưa
    const checkProduct = productsInCart.some(value => value.id === id);

    if (!checkProduct) {
      // Nếu sản phẩm chưa có trong giỏ hàng
      const product = products.find(value => value.id === id);
      if (product) {
        // Thêm sản phẩm vào giỏ hàng
        setProductsInCart(prevProducts => [
          ...prevProducts,
          {
            ...product,
            quantity: 1
          }
        ]);
        localStorage.setItem('products', JSON.stringify(productsInCart));
      }
    } else {
      // Nếu sản phẩm đã có trong giỏ hàng
      const updatedProducts = productsInCart.map(product => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity + 1
          };
        }
        return product;
      });
      setProductsInCart(updatedProducts);
      localStorage.setItem('products', JSON.stringify(updatedProducts));
    }
    //productTotal(); 
  };


  return (
    <></>
  );
}

export default Cart;