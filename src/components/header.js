import React from "react"
import { Link } from "react-router-dom"
import { Dropdown } from 'react-bootstrap';
import '../css/header.css';
import PopUp from "../js/popup";
export default function Header() {

    return(
<nav className="navbar navbar-expand-lg navbar-light bg-dark ">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-white">
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
              <Link to="/" className="nav-link active text-white" aria-current="page">
              Trang Chủ
              </Link>
            </li>     
            <li className="nav-item dropdown">
              <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                  Thương Hiệu
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#" onClick={PopUp}>Điện thoại</Dropdown.Item >
                  <Dropdown.Item href="#" onClick={PopUp}>Tablet</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>

            <li className="nav-item dropdown">
              <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                  Loại sản phẩm
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#" onClick={PopUp}>Apple</Dropdown.Item>
                  <Dropdown.Item href="#" onClick={PopUp}>Samsung</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>

            <Link to="../data/homepage" className="nav-link active text-white" aria-current="page" onClick={PopUp}>
                Hóa đơn
            </Link>
            
          </ul>
          <form className="d-flex">
            <Link to="/Register" className="nav-link active text-white signIn" aria-current="page">
              Đăng Ký
            </Link>
            <Link to="/Login" className="nav-link active text-white logIn" aria-current="page">
              Đăng Nhập
            </Link>
          </form>
        </div>
      </div>
    </nav>
    
    )

}