import products from './products';
import Swal from 'sweetalert2';
export default function addToCart(id) {
    let productInCart = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];
    let checkProduct = productInCart.some(product => product.id === id);

    if (!checkProduct) {
        let product = products.find(product => product.id === id);
        productInCart.unshift({
            ...product,
            quantity: 1
        });
        localStorage.setItem('products', JSON.stringify(productInCart));
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thêm vào giỏ hàng thành công",
            showConfirmButton: false,
            timer: 1000
          });
          setTimeout(function() {
            window.location.reload();
          }, 1000);
    } else {
        let getIndex = productInCart.findIndex(product => product.id === id);
        let product = productInCart.find(product => product.id === id);
        productInCart[getIndex] = {
            ...product,
            quantity: ++product.quantity
        };
        localStorage.setItem('products', JSON.stringify(productInCart));
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thêm vào giỏ hàng thành công",
            showConfirmButton: false,
            timer: 1000
          });
          setTimeout(function() {
            window.location.reload();
          }, 1000);
    }
}

