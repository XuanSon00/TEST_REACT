import React, { useState, useEffect } from 'react';
import '../css/cart.css';
import confirmPopUp from '../js/confirmPopUp'; 
import HeaderData from '../components/HeaderData';
import Footer from '../components/footer';
const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  const handleIncreaseQuantity = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].quantity++;
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const handleDecreaseQuantity = (index) => {
    const updatedProducts = [...products];
    if (updatedProducts[index].quantity > 1) {
      updatedProducts[index].quantity--;
      setProducts(updatedProducts);
      localStorage.setItem('products', JSON.stringify(updatedProducts));
    }
  };

  const handleRemoveProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  // Tính tổng cộng
  const totalMoney = products.reduce((total, product) => {
    return total + (product.quantity * parseInt(product.price.replace(/[.]/g, '')));
  }, 0);


  return (
    <>
    <HeaderData />
    <div className="cart" style={{ marginBottom: '200px' }}>
    <form action="">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sản Phẩm</th>
            <th>Giá</th>
            <th>Số Lượng</th>
            <th>Tổng giá</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
            <td style={{ display: 'flex', alignItems: 'center' }}><img src={product.img} alt={product.name} style={{ width: '70px' }} /></td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
                <div className="button-container">
                    <button className="btn btn-secondary" onClick={() => handleIncreaseQuantity(index)}>+</button>
                    {product.quantity}
                    <button className="btn btn-secondary" onClick={() => handleDecreaseQuantity(index)}>-</button>
                </div>
            </td>
            <td>
                {`${(product.quantity * parseInt(product.price.replace(/[.]/g, ''))).toLocaleString()} `}
                <sup>đ</sup>
            </td>
            <td>
                
                <button className="btn btn-primary" onClick={() => handleRemoveProduct(index)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ textAlign: 'right' }}>
        <h4>Tổng cộng: <span>{totalMoney.toLocaleString()}</span> <sup>đ</sup></h4>
      </div>
      <button onClick={confirmPopUp} style={{ width: '20%', backgroundColor: 'aquamarine' }}>Thanh Toán</button>
    </form>
  </div>
  </>
);
};

export default Cart;
