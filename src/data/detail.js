import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import products from '../js/products';
import Cart from '../js/addToCart';
import HeaderData from '../components/HeaderData';
import Footer from '../components/footer';

const Detail = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productId = localStorage.getItem('productId');
    const product = products.find(value => value.id === parseInt(productId));
    if (product) {
      setProduct(product);
    }
  }, []);

  const redirectToDetail = (productId) => {
    const history = useHistory();

    const handleRedirect = () => {
      localStorage.setItem('productId', productId);
      history.push('/detail');
    };
  };

  return (
    <>

    <HeaderData />
        <div className="wrapper">
      <div>
        <img className="w-100" src="https://www.macgasm.net/wp-content/uploads/2023/09/iphone-15-release.jpg" alt="banner" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="w-30 col-3 col-md-3 mt-3">
            <img className="img-fluid" src="https://www.optus.com.au/content/dam/optus/images/for-you/connected/tech/galaxy-z-flip4-what-you-need-to-know-article-banner.jpg/renditions/version-1660121916183/original.jpeg" alt="" />
          </div>
          <div className="w-30 col-3 col-md-3 mt-3">
            <img className="img-fluid" src="https://genz.com.vn/wp-content/uploads/2023/09/iphone-15-pro-max-iphone-15-pro-mo-ban-29-9-thumbnail.jpg" alt="" />
          </div>
          <div className="w-30 col-3 col-md-3 mt-3">
            <img className="img-fluid" src="https://img.etimg.com/photo/msid-82168208,imgsize-86772/%E2%80%8BiPadPros.jpg" alt="" />
          </div>
        </div>
      </div>
      <br />
      <h2 className="text-center mt-3">Sản Phẩm</h2>
      <hr />
      <div className="product">
        <div className="product-box">
          <div id="product-items">
          <div>
      {product && (
        <div>
          <div className="product-item" style={{ cursor: 'pointer' }}>
            <img src={product.img} alt="" />
            <div className="product-item-text">
              <h1>{product.name}</h1>
              <p><span>{product.price}</span><sup>đ</sup></p>
            </div>
            <button onClick={() => Cart(product.id)} className="btn btn-primary">Thêm vào giỏ hàng</button>
          </div>
          <div className="product-detail">
            <h1 style={{ textAlign: 'center' }}>Thông Tin Sản Phẩm</h1>
            <div className="producInfo">
              <b>Screen:</b>
              <span>{product.Screen}</span>
            </div>
            <div className="producInfo">
              <b>OS:</b>
              <span>{product.OS}</span>
            </div>
            <div className="producInfo">
              <b>RearCamera:</b>
              <span>{product.RearCamera}</span>
            </div>
            <div className="producInfo">
              <b>FrontCamera:</b>
              <span>{product.FrontCamera}</span>
            </div>
            <div className="producInfo">
              <b>Chip:</b>
              <span>{product.Chip}</span>
            </div>
            <div className="producInfo">
              <b>RAM:</b>
              <span>{product.RAM}</span>
            </div>
            <div className="producInfo">
              <b>StorageCapacity:</b>
              <span>{product.StorageCapacity}</span>
            </div>
            <div className="producInfo">
              <b>SIM:</b>
              <span>{product.SIM}</span>
            </div>
            <div className="producInfo">
              <b>BatterPhoneCharger:</b>
              <span>{product.BatterPhoneCharger}</span>
            </div>
          </div>
        </div>
      )}
    </div>
          </div>
        </div>
      </div>
    </div>
   
    
    <Footer />
    </>
  );
};

export default Detail;
