import React, { useState } from 'react';
import HeaderData from "../components/HeaderData";
import Footer from "../components/footer";
import products from '../js/products';
import Cart from '../js/addToCart';
import '../css/product.css';

export default function Apple() {
    const appleProducts = products.filter(product => product.tag.includes('apple'));
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
      setModal(!modal);
    };
    const productItems = appleProducts.map(product => (
        <div className="product-item" style={{ cursor: 'pointer' }}>
            <img src={product.img} alt={product.name} />
            <div className="product-item-text">
                <h1>{product.name}</h1>
                <p><span>{product.price}</span><sup>đ</sup></p>
            </div>
            <button className="btn btn-secondary btn-modal" onClick={toggleModal}>Chi tiết</button>
            <button onClick={(e) => { Cart(product.id); e.stopPropagation(); }} className="btn btn-primary">Thêm vào giỏ hàng</button>
        </div>
    ));

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
                            {productItems}
                        </div>
                    </div>
                </div>
                
                {modal && (
                  <div className="product-details modal">
                    <div className='overlay'>
                      <div className='modal-content'>
                        <h2>Chi tiết sản phẩm</h2>
                        <p>Tên: {products.name}</p>
                        <img src={products.img} alt={products.name} />
                        <p>Giá: {products.price}đ</p>
                        <p>Screen: {products.Screen}</p>
                        <p>OS: {products.OS}</p>
                        <p>Rear Camera: {products.RearCamera}</p>
                        <p>Front Camera: {products.FrontCamera}</p>
                        <p>Chip: {products.Chip}</p>
                        <p>RAM: {products.RAM}</p>
                        <p>Storage Capacity: {products.StorageCapacity}</p>
                        <p>SIM: {products.SIM}</p>
                        <p>Battery & Phone Charger: {products.BatterPhoneCharger}</p>
                        <div>
                          <button className='close-modal' onClick={toggleModal}>Đóng</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
            </div>
            
            <Footer />
        </>
    )
}