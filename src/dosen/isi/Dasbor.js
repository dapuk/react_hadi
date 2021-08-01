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
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 col-sm-4 col-4">
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
          <div className="col-md-4 col-sm-4 col-4">
          <div className="info-box">
                <span className="info-box-icon bg-warning elevation-1"><i className="fas fa-edit" /></span>
                <div className="info-box-content">
                  <span className="info-box-text">Jumlah Ujian</span>
                  <span className="info-box-number">
                    10
                  </span>
                </div>
                {/* /.info-box-content */}
              </div>
          </div>
          <div className="col-md-4 col-sm-4 col-4">
          <div className="info-box">
                <span className="info-box-icon bg-success elevation-1"><i className="fas fa-book" /></span>
                <div className="info-box-content">
                  <span className="info-box-text">Jumlah Matakuliah</span>
                  <span className="info-box-number">
                    10
                  </span>
                </div>
                {/* /.info-box-content */}
              </div>
          </div> 
          {/* <div className="col-md-12 col-sm-12 col-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">
                  <i className="fa fa-2x fa-chart-line" /> Status Aplikasi
                </h3>
              </div>
              <div className="card-body">
                <small>
                  <table className="table table-bordered">
                    <thead>                  
                    </thead>
                    <tbody>
                      <tr>
                        <td>Jumlah Kelas : 0</td>
                        <td>Jumlah Ujian : 0</td>
                        <td>Jumlah Matakuliah : 0</td>
                      </tr>
                    </tbody>
                  </table>
                </small>
              </div>
              <div className="card-footer">
                <div className="float-right">                
                  <button className="btn btn-default"> Export status ke PDF </button>
                  <button className="btn btn-default"> Export status ke EXCEL </button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>


  </div>
  {/* /.content-wrapper */}</div>

        )
    }
}
