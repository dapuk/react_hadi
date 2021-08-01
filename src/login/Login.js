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
        (username == 'admin' && password == 'admin') ? history.push("/admin") : (username == 'dosen' && password == 'dosen') ? history.push("/dosen") : (username == 'mahasiswa' && password == 'mahasiswa') ? history.push("/mahasiswa")  : alert('Username dan Password Salah')
    }

    return (
        <div>
            <body className="hold-transition login-page">
            <div className="login-box">
        <div className="login-logo">
        <img src={logo} className="img-circle" style={{height: 100, width: 100}} /><br />
        <a href="#">Login<br /><b>E-TEST</b></a>
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
