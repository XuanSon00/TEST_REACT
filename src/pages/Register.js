import Header from "../components/header";
import Footer from "../components/footer";
import { useState,useEffect } from "react";
import { db, storage} from "../js/firebase";
import { collection, addDoc, onSnapshot, query  } from "firebase/firestore";
import '../css/register.css';
import Swal from "sweetalert2";
export default function Register() {

        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [phone, setPhone] = useState("");
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const [confirmPassword, setConfirmPassword] = useState("");
        const [data, setData] = useState([]);
        const [error, setError] = useState("");

        useEffect(() => {
            //tạo một truy vấn đến collection 'UserInfo' trong cơ sở dữ liệu Firebase
            const q = query(collection(db, "Register"));
            //lắng nghe sự thay đổi trong truy vấn q. Mỗi khi có sự thay đổi trong collection 'Register'
            // hàm callback được truyền vào onSnapshot sẽ được gọi
            //Tham số QuerySnapshot là kết quả trả về từ truy vấn và chứa thông tin về các document thỏa mãn truy vấn.
            const unsubscribe = onSnapshot(q, (snapshot) => {
              const newData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }));
              setData(newData);
            });
              //trả về một hàm từ useEffect để huỷ lắng nghe sự thay đổi khi component bị huỷ
              return () => unsubscribe();
            }, []);
            const handleSave = async (e) => {
              e.preventDefault();
              let errors = [];
            
              // Kiểm tra các điều kiện
              if (name === "") {
                errors.push("Vui lòng nhập Họ và Tên.");
              }
              if (email === "") {
                errors.push("Vui lòng nhập Email.");
              } else if (!email.includes("@")) {
                errors.push("Email không hợp lệ.");
              }
              if (phone === "") {
                errors.push("Vui lòng nhập Điện thoại.");
              } else if (phone.length > 10) {
                errors.push("Số điện thoại không hợp lệ.");
              }
              if (username === "") {
                errors.push("Vui lòng nhập Tên người dùng.");
              } else if (username.length < 6) {
                errors.push("Tên người dùng phải có ít nhất 6 ký tự.");
              }
              if (password === "") {
                errors.push("Vui lòng nhập Mật khẩu.");
              }
              if (confirmPassword === "") {
                errors.push("Vui lòng nhập Xác nhận mật khẩu.");
              }
              if (password.length < 6) {
                errors.push("Mật khẩu phải có ít nhất 6 ký tự.");
              }
              if (password !== confirmPassword) {
                errors.push("Mật khẩu và Xác nhận mật khẩu không khớp.");
              }
            
              const empty =
                name === "" &&
                email === "" &&
                phone === "" &&
                username === "" &&
                password === "" &&
                confirmPassword === "";
              if (empty) {
                errors.push("Vui lòng nhập đầy đủ thông tin.");
              }
            
              // Nếu không có lỗi, tiến hành đăng ký
              if (errors.length === 0) {
                await addDoc(collection(db, "Register"), {
                  name,
                  email,
                  phone,
                  username,
                  password,
                });
                const newData = {
                  name: name,
                  email: email,
                  phone: phone,
                  username: username,
                  password: password,
                };
            
                setData([...data, newData]);
                setName("");
                setEmail("");
                setPhone("");
                setUsername("");
                setPassword("");
                setConfirmPassword("");
                setError("");
              // Hiển thị SweetAlert2 khi đăng ký thành công
                Swal.fire({
                  icon: 'success',
                  title: 'Đăng ký thành công!',
                  showConfirmButton: false,
                  timer: 1500
                });
              } else {
                setError(errors.map(error => <div key={error}>{error}<br /></div>));
              }
            };
    return(
        <>
<Header />
<section>
        <div className="wrapper" style={{ minHeight: "880px" }}>
          <div style={{ marginTop: "50px" }} className="form">
            <h2>Đăng Ký</h2><hr/>
            <div className="Info">
              <span>Họ và Tên:</span><br />
              <input type="text" id="name" required
                    value={name} 
                    className="inputValue" 
                    onChange={(e) => setName(e.target.value)}/><br />
                    
            </div>
            <div className="Info">
              <span>Email:</span><br />
              <input type="text" required
                    id="email" 
                    className="inputValue" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}/>
                    
            </div>
            <div className="Info">
              <span>Điện thoại:</span><br />
              <input type="number" required
                    id="phone"
                    value={phone} 
                    className="inputValue" 
                    onChange={(e) => setPhone(e.target.value)}/>
              
            </div>
        
            <div className="Info">
              <span>Tên người dùng:</span><br />
              <input type="text" required
                id="user" 
                className="inputValue" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
              
            </div>
            <div className="Info">
              <span>Mật khẩu:</span><br />
              <div className="pass" >
                <input type="password" required
                    id="password" 
                    className="inputValue" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>
              </div>
              
            </div>
            <div className="Info" >
              <span>Xác nhận mật khẩu:</span><br />
              <div className="confirm-pass">
                <input type="password" required
                id="confirmPassword" 
                className="inputValue" 
                value={confirmPassword} 
                onChange={(e)=> setConfirmPassword(e.target.value)}/>
              </div>
            </div>
              <button type="submit"  className="confirm" onClick={handleSave}>Đăng kí</button>
              {error && <p className="error-message">{error}</p>}
          </div>
        </div>
      </section>
<Footer />
        </>
    )
}