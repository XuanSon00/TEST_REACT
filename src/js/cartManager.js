import React from 'react';

function CartManager({ productInCart, saveToLocalStorage, productToTable, totalPrice }) {
    const cartIncrease = (index) => {
        const updatedProductInCart = [...productInCart];
        updatedProductInCart[index] = {
            ...updatedProductInCart[index],
            quantity: updatedProductInCart[index].quantity + 1
        };
        saveToLocalStorage(updatedProductInCart);
        productToTable();
        totalPrice();
    };

    const cartDecrease = (index, quantity) => {
        if (quantity > 1) {
            const updatedProductInCart = [...productInCart];
            updatedProductInCart[index] = {
                ...updatedProductInCart[index],
                quantity: updatedProductInCart[index].quantity - 1
            };
            saveToLocalStorage(updatedProductInCart);
            productToTable();
            totalPrice();
        } else {
            alert('Số lượng sản phẩm tối thiểu là 1');
        }
    };

    return (
        <div>
            {/* You can include buttons or other UI elements here if needed */}
        </div>
    );
}

export default CartManager;
