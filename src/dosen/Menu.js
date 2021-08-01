import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import user from '../user.png'

export default class Menu extends Component {
    render() {
      let MarginFontAwe = {
        marginRight:'5px'
      };

        return (
            <div>
  {/* Main Sidebar Container */}
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <a href="index3.html" className="brand-link">
      {/* <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} /> */}
      <center>
      <span className="brand-text font-weight-light">E - TEST</span>
      </center>
    </a>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src={user} className="img-circle elevation-2" alt="User Image" />
        </div>
        <div className="info">
          <a href="#" className="d-block">Dosen</a>
        </div>
      </div>
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
            <div>
              <li className="nav-item">
                <NavLink exact to="/dosen/"  activeClassName="nav-link active" className="nav-link">
                    <i className="nav-icon fas fa-tachometer-alt" style={MarginFontAwe} /> 
                    <p> Dashboard</p>
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/dosen/profil/" activeClassName="nav-link active" className="nav-link">
                    <i className="nav-icon fas fa-user" style={MarginFontAwe} /> 
                    <p> Profile</p>
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/dosen/ujian/" activeClassName="nav-link active" className="nav-link">
                    <i className="nav-icon fas fa-book" style={MarginFontAwe} /> 
                    <p> Ujian</p>
                </NavLink>
              </li>

              <li className="nav-item">
              <NavLink to="/dosen/paket/" activeClassName="nav-link active" className="nav-link">
                    <i className="nav-icon fas fa-book" style={MarginFontAwe} /> 
                    <p>Paket Soal</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" exact className="nav-link">
                <i className="nav-icon fa fa-power-off text-danger" style={MarginFontAwe} /> 
                    <p>Sign Out</p>
                </NavLink>
              </li>
            </div>

        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</div>

        )
    }
}
