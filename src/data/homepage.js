import HeaderData from "../components/HeaderData";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import '../css/index.css';
export default function Homepage() {
    return(
        <>
<HeaderData />
<section>
  <div className="wrapper">
    <div>
      <img className="w-100" src="https://www.macgasm.net/wp-content/uploads/2023/09/iphone-15-release.jpg" alt="banner" />
    </div>
    <div className="container">
      <div className="row justify-content-center">
        <div className="w-30 col-3 col-md-3 mt-3 ">
          <img className="img-fluid" src="https://www.optus.com.au/content/dam/optus/images/for-you/connected/tech/galaxy-z-flip4-what-you-need-to-know-article-banner.jpg/renditions/version-1660121916183/original.jpeg" alt="" />
        </div>
        <div className="w-30 col-3 col-md-3 mt-3 ">
          <img className="img-fluid" src="https://genz.com.vn/wp-content/uploads/2023/09/iphone-15-pro-max-iphone-15-pro-mo-ban-29-9-thumbnail.jpg" alt="" />
        </div>
        <div className="w-30 col-3 col-md-3 mt-3 ">
          <img className="img-fluid" src="https://img.etimg.com/photo/msid-82168208,imgsize-86772/%E2%80%8BiPadPros.jpg" alt="" />
        </div>
      </div>
    </div>
    <br />
    <h2 className="text-center mt-3">Sản Phẩm</h2>
    <hr />
    <div className="product">
      <div className="product-box">
        <div className="product-items">
          <div className="product-item">
            <Link to="/Apple" className="condition">
              <h1>Apple</h1>
            </Link>
            <img src="https://product.hstatic.net/1000300544/product/iphone11-red-select-2019_222ac686f374464aa2c37e8bc41cbd54_1024x1024.png" alt="" />
            <div className="product-item-text"></div>
          </div>
          <div className="product-item">
            <Link to="/Samsung" className="condition">
              <h1>Samsung</h1>
            </Link>
            <img src="https://hc.com.vn/i/ecommerce/media/ckeditor_2642836.png" alt="" />
            <div className="product-item-text"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer />
        </>
        )
    }
    