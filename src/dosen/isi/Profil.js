import React, { Component } from 'react'

export default class Profil extends Component {
    render() {
        return (
        <div>
  {/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Profil Dosen</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
              <li className="breadcrumb-item active">Profil Dosen</li>
            </ol>
          </div>
        </div>
      </div>{/* /.container-fluid */}
    </section>
    {/* Main content */}
    <section className="content">
        <div className="container-fluid">
            <div className="row">
            <div className="col-12">
                <div className="card">
                <div className="card-header">
                    <h3 className="card-title">Data Profil</h3>
                    <div className="card-tools">
                    <a href="#" className="btn btn-sm btn-primary">
                        <i className="fas fa-edit" /> Ubah Profil
                    </a>
                    </div>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                    <div className="row">
                    <div className="col-md-4">
                        <div className="card card-primary card-outline">
                        <div className="card-body box-profile">
                            <div className="text-center">
                            <img className="profile-user-img" src="/dist/img/user.png" style={{width: '100%'}} />
                            </div>
                        </div>
                        {/* /.card-body */}
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card card-primary">
                        <div className="card-header">
                            <h3 className="card-title">About Me</h3>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body">
                            <ul className="list-group list-group-unbordered mb-3">
                            <li className="list-group-item">
                                <b>Nama</b> <a className="float-right">Dosen</a>
                            </li>
                            <li className="list-group-item">
                                <b>NIP</b> <a className="float-right">001</a>
                            </li>
                            <li className="list-group-item">
                                <b>Email</b> <a className="float-right">email@dosen.com</a>
                            </li>
                            <li className="list-group-item">
                                <b>Bidang</b> <a className="float-right">AI Learning</a>
                            </li>
                            </ul>
                        </div>
                        {/* /.card-body */}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>



  </div>
  {/* /.content-wrapper */}</div>

        )
    }
}
