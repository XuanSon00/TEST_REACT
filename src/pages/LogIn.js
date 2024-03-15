import Header from "../components/header";
import { Link } from "react-router-dom";
import '../css/login.css';
import Footer from "../components/footer";
import { useState, useEffect } from "react";
import { db } from "../js/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function LogIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState([]);
    const navigate = useNavigate(); //điều hướng đến các trang khác
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "Register"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
          const newData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setData(newData);
        });

        return () => unsubscribe();
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        const newErrors = [];

        if (username === "") {
            newErrors.push("Vui lòng nhập Tên người dùng.");
        }
        if (password === '') {
            newErrors.push("Vui lòng nhập mật khẩu.");
        }

        if (newErrors.length > 0) {
            setErrors(newErrors);
            return;
        }

        const userData = data.find((item) => item.username === username);
        if (!userData || userData.password !== password) {
            setErrors(['Tên người dùng hoặc mật khẩu không chính xác.']);
            return;
        }
        Swal.fire({
            icon: 'success',
            title: 'Đăng nhập thành công!',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            navigate('/homepage', { state: { userData } });
        });
    
    };


    return(
        <>
            <Header />
            <section>
                <div className="form">
                    <h2>Đăng nhập</h2>
                    <hr/>
                    <div className="user">
                        <span>Tên người dùng:</span>
                        <br />
                        <input type="text" 
                            className="textbox" 
                            id="userLogin" 
                            placeholder="nhập tên đăng nhập" 
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="password">
                        <span>Mật khẩu:</span>
                        <br />
                        <input type="password" 
                            className="textbox" 
                            id="passwordLogin" 
                            placeholder="Nhập mật khẩu" 
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <br />
                    <button id="button" className="text_box" onClick={handleLogin}>Đăng nhập</button>
                    {errors.map((error, index) => (
                        <p key={index} className="error-message">{error}</p>
                    ))}
                    <Link to="/register">
                        <small>Chưa có tài khoản</small>
                    </Link>
                </div>
            </section>
            <div className="footer">
                <Footer />
            </div>
        </>
    )
}
