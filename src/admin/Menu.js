import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import user from '../user.png'

function Menu() {
  let history = useHistory();

  function signOutClick() {
    history.push("/");
    window.location.reload();
  }

  let MarginFontAwe = {
    marginRight:'5px'
  };

  let CursorPointer = {
    cursor: "pointer"
  };

  return (
    <div>
  {/* Main Sidebar Container */}
  <aside className="main-sidebar sidebar-light-primary elevation-4">
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
          <a href="#" className="d-block">Administrator</a>
        </div>
      </div>
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
          <div>
            <li className="nav-item">
                <NavLink exact to="/admin/"  activeClassName="nav-link active" className="nav-link">
                    <i className="nav-icon fas fa-tachometer-alt" style={MarginFontAwe} /> 
                    <p> Dashboard</p>
                </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/admin/dosen"  activeClassName="nav-link active" className="nav-link">
                    <i className="nav-icon fas fa-users" style={MarginFontAwe} /> 
                    <p> Dosen</p>
                </NavLink>
            </li>
            <li className="nav-item">
            <NavLink exact to="/admin/mahasiswa"  activeClassName="nav-link active" className="nav-link">
            <i className="nav-icon fas fa-users" style={MarginFontAwe} /> 
                    <p> Mahasiswa</p>
                </NavLink>
            </li>
            <li className="nav-item">
            <NavLink exact to="/admin/matakuliah"  activeClassName="nav-link active" className="nav-link">
            <i className="nav-icon fas fa-book" style={MarginFontAwe} /> 
                    <p> Mata Kuliah</p>
                </NavLink>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link ">
                <i className="nav-icon fas fa-book" style={MarginFontAwe} /> 
                <p>Data Ujian</p>
              </a>
            </li>
            <li className="nav-item">
            <NavLink exact to="/admin/profil"  activeClassName="nav-link active" className="nav-link">
            <i className="nav-icon fas fa-user" style={MarginFontAwe} /> 
                    <p> Profile</p>
                </NavLink>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link ">
                <i className="nav-icon fas fa-cog" style={MarginFontAwe}/> 
                <p> Setting</p>
              </a>
            </li>

            <li className="nav-item">
                <div onClick={signOutClick} style={CursorPointer} activeClassName="nav-link active" className="nav-link">
                  <i className="nav-icon fa fa-power-off text-danger" style={MarginFontAwe} /> 
                      <p>Sign Out</p>
                </div>
              </li>
          </div>

        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</div>
  );
}

export default Menu
