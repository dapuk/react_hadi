import React, { Component } from 'react'

export default class Dasbor extends Component {
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
            <h1>Dashboard</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              {/* <li className="breadcrumb-item"><a href="#">Home</a></li> */}
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </div>
        </div>
      </div>{/* /.container-fluid */}
    </section>
    {/* Main content */}
    <div>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-sm-4 col-4">
              <a href="#" style={{color: 'black'}}>
                <div className="card">
                  <div className="card-body text-center">
                    <i className="fas fa-4x fa-plus-square" />
                    <br /><small>Pengguna</small>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-sm-4 col-4">
              <a href="#" style={{color: 'black'}}>
                <div className="card">
                  <div className="card-body text-center">
                    <i className="fas fa-4x fa-users" />
                    <br /><small>Dosen</small>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-sm-4 col-4">
              <a href="#" style={{color: 'black'}}>
                <div className="card">
                  <div className="card-body text-center">
                    <i className="fas fa-4x fa-users" />
                    <br /><small>Mahasiswa</small>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-sm-4 col-4">
              <a href="#" style={{color: 'black'}}>
                <div className="card">
                  <div className="card-body text-center">
                    <i className="fas fa-4x fa-book" />
                    <br /><small>Mata Kuliah</small>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-sm-4 col-4">
              <a href="#" style={{color: 'black'}}>
                <div className="card">
                  <div className="card-body text-center">
                    <i className="fas fa-4x fa-bullhorn" />
                    <br /><small>Pengumuman</small>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-sm-4 col-4">
              <a href="#" style={{color: 'black'}}>
                <div className="card">
                  <div className="card-body text-center">
                    <i className="fas fa-4x fa-edit" />
                    <br /><small>Ujian</small>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>{/* /.container-fluid */}
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">
                    <i className="fa fa-2x fa-chart-line" /> Status Aplikasi
                  </h3>
                </div>
                <div className="card-body">
                  <div className="row">
                  <div className="col-md-3 col-sm-3 col-3">
                    <div className="info-box">
                        <span className="info-box-icon bg-info elevation-1"><i className="fas fa-book" /></span>
                        <div className="info-box-content">
                          <span className="info-box-text">Jumlah Kelas</span>
                          <span className="info-box-number">
                            10
                          </span>
                        </div>
                        {/* /.info-box-content */}
                      </div>
                      </div>

                      <div className="col-md-3 col-sm-3 col-3">
                        <div className="info-box">
                            <span className="info-box-icon bg-success elevation-1"><i className="fas fa-users" /></span>
                            <div className="info-box-content">
                              <span className="info-box-text">Jumlah Dosen</span>
                              <span className="info-box-number">
                                10
                              </span>
                            </div>
                            {/* /.info-box-content */}
                          </div>
                      </div>

                      <div className="col-md-3 col-sm-3 col-3">
                        <div className="info-box">
                            <span className="info-box-icon bg-primary elevation-1"><i className="fas fa-users" /></span>
                            <div className="info-box-content">
                              <span className="info-box-text">Jumlah Mahasiswa</span>
                              <span className="info-box-number">
                                10
                              </span>
                            </div>
                            {/* /.info-box-content */}
                          </div>
                      </div>

                      <div className="col-md-3 col-sm-3 col-3">
                        <div className="info-box">
                            <span className="info-box-icon bg-warning elevation-1"><i className="fas fa-users" /></span>
                            <div className="info-box-content">
                              <span className="info-box-text">Jumlah Matakuliah</span>
                              <span className="info-box-number">
                                10
                              </span>
                            </div>
                            {/* /.info-box-content */}
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
  </div>
  {/* /.content-wrapper */}</div>

        )
    }
}
