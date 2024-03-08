import Swal from 'sweetalert2';
import React from 'react';
import { useState } from 'react';

const PopUp = () => {
      Swal.fire({
        title: 'Vui lòng đăng nhập hoặc đăng ký tài khoản?',
        icon: 'question',
      });
}
export default PopUp;
