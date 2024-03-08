import Header from "../components/header";
import { Link } from "react-router-dom";
import '../css/login.css';
import Footer from "../components/footer";
import { useState, useEffect } from "react";
import { db } from "../js/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useNavigate } from "react-router-dom";


export default function LogIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState([]);
    const navigate = useNavigate(); //điều hướng đến các trang khác
    const [error, setError] = useState('');


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
        let error = '';

        if (username === '') {
            error = 'Vui lòng nhập Tên người dùng.';
          } else if (password === '') {
            error = 'Vui lòng nhập Mật khẩu.';
          }


        // Tìm người dùng trong mảng 'data' dựa trên tên người dùng và mật khẩu 
        /*const userData = data.find(item => item.username === username && item.password === password);
        if (userData) {
          navigate("/homepage", { state: { userData } });// Điều hướng đến trang "../data/HomePage" và truyền dữ liệu người dùng dưới dạng 'state'
        } else{
            setError('Tên người dùng hoặc mật khẩu không chính xác.');
        }*/
        if (error === '') {
            if (data.length > 0) {
                const userData = data.find((item) => item.username === username && item.password === password);
                if (userData) {
                    navigate('/homepage', { state: { userData } });
                } else {
                    error = 'Tên người dùng hoặc mật khẩu không chính xác.';
                }
            } else {
                error = 'Dữ liệu người dùng chưa được tải, vui lòng thử lại sau.';
            }
        }

        setError(error);
        
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
                d="passwordLogin" 
                placeholder="Nhập mật khẩu" 
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <br />
            {error && <p className="error">{error}</p>}
            <button id="button" className="text_box" onClick={handleLogin}>Đăng nhập</button>
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