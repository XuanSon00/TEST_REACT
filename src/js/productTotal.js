import React, { useState, useEffect } from 'react';

function ProductTotal() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Lấy dữ liệu từ localStorage
    const products = localStorage.getItem('products');
    // Kiểm tra nếu products không null thì tính tổng số sản phẩm
    if (products) {
      const productList = JSON.parse(products);
      setTotal(productList.length);
    }
  }, []);

  return total;
}

export default ProductTotal;
