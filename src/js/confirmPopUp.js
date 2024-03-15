import Swal from 'sweetalert2';

const confirmPopUp = (event) => {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của nút

  // Kiểm tra xem localStorage có dữ liệu không
  if (!localStorage.getItem('products')) {
    Swal.fire({
      title: "Thông báo",
      text: "Vui lòng thêm sản phẩm vào giỏ hàng",
      icon: "info",
      showCancelButton: false,
      confirmButtonText: "OK",
      allowOutsideClick: false,
    });
    return; 
  }

  Swal.fire({
    title: "Xác nhận thanh toán",
    showDenyButton: true,
    confirmButtonText: "Save",
    allowOutsideClick: false,
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem('products');
      Swal.fire("Thanh toán thành công!", "", "success");
      setTimeout(() => {
        window.location.reload();
      }, 1000); 
    } else {
      Swal.fire({
        title: "Xác nhận thanh toán",
        showDenyButton: true,
        confirmButtonText: "Save",
        allowOutsideClick: false,
      });
    }
  });
};

export default confirmPopUp;
