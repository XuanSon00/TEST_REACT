import React from "react"
import { Link } from "react-router-dom"
import { Dropdown } from 'react-bootstrap';
import '../css/header.css';
export default function HeaderData() {

    return(
<nav className="navbar navbar-expand-lg navbar-light bg-dark ">
      <div className="container-fluid">
        <Link to="/homepage" className="navbar-brand text-white">
            <box-icon type='logo' name='apple' size="50px" color='white'></box-icon>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/homepage" className="nav-link active text-white" aria-current="page">
              Trang Chủ
              </Link>
            </li>     
            <li className="nav-item dropdown">
              <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                  Thương Hiệu
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/phone" >Điện thoại</Dropdown.Item >
                  <Dropdown.Item href="/tablet" >Tablet</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>

            <li className="nav-item dropdown">
              <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                  Loại sản phẩm
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/apple" >Apple</Dropdown.Item>
                  <Dropdown.Item href="/samsung" >Samsung</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>

            <Link to="/" className="nav-link active text-white" aria-current="page">
                Hóa đơn
            </Link>
            
          </ul>
        <form className="d-flex">
            <div className="nav-item">
                <Link to="/">Đăng Xuất</Link>
            </div>
            <Link className="nav-link text-white condition" to="/cart">
                <i style={{ fontSize: '50px' }} className="bx bx-cart-alt"></i>
                <sub style={{ fontSize: 'medium', color: '#e5330b' }} id="total"></sub>
            </Link>
        </form>
        </div>
      </div>
    </nav>
    
    )

}