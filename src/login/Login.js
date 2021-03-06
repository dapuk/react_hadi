import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import logo from '../Logo-unj.png'
  
function Login() {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    let history = useHistory();

    var onChangeUsername = (e) => {
        var value = e.target.value
        setUsername(value)
    } 

    var onChangePassword = (e) => {
        var value = e.target.value
        setPassword(value)
    } 

    const ProsesLogin = (e) => {
        (username == 'admin' && password == 'dapukganteng') ? history.push("/admin") : (username == 'dosen' && password == 'dapukganteng') ? history.push("/dosen") : (username == 'mahasiswa' && password == 'dapukganteng') ? history.push("/mahasiswa")  : alert('Username dan Password Salah')
    }

    return (
        <div>
            <body className="hold-transition login-page">
            <div className="login-box" style={{ width: 520 }}>
        <div className="login-logo" style={{ width: 500 }}>
        <img src={logo} className="img-circle" style={{height: 230, width: 230, marginBottom: '10px'}} /><br />
        <h4>Aplikasi Ujian Pilihan Ganda</h4>
        <h4>Pendidikan Teknik Informatika dan Komputer</h4>
        <a href="#"><b>(SIUJARING)</b></a>
        </div>
        <div className="card">
        <div className="card-body login-card-body">
        <p className="login-box-msg">Sign in to start your session</p>
        <div className="input-group mb-3">
            <input type="text" className="form-control" name="username" value={username} onChange={onChangeUsername} placeholder="Username" required />
            <div className="input-group-append">
            <div className="input-group-text">
                <span className="fas fa-user" />
            </div>
            </div>
        </div>
        <div className="input-group mb-3">
            <input type="password" className="form-control" name="password" value={password} onChange={onChangePassword} placeholder="Password" required />
            <div className="input-group-append">
            <div className="input-group-text">
                <span className="fas fa-lock" />
            </div>
            </div>
        </div>
        <div className="row">
            <div className="col-8">
            </div>
            <div className="col-4">
            <button type="submit" onClick={ProsesLogin} className="btn btn-primary btn-block">Sign In</button>
            </div>
        </div>
        </div>
        </div>
        </div>
        </body>
        </div>
    )
}

export default Login
