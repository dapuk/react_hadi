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
            <h1>Dasbor</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              {/* <li className="breadcrumb-item"><a href="#">Home</a></li> */}
              <li className="breadcrumb-item active">Dasbor</li>
            </ol>
          </div>
        </div>
      </div>{/* /.container-fluid */}
    </section>
    {/* Main content */}
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
            <div className="alert bg-green">
              <h4>Kelas</h4>
              <span className="d-block"> 12.1A.10</span>                
            </div>
          </div>
          <div className="col-sm-3">
            <div className="alert bg-blue">
              <h4>Jurusan</h4>
              <span className="d-block"> Teknik Informatika</span>                
            </div>
          </div>
          <div className="col-sm-3">
            <div className="alert bg-yellow">
              <h4>Tanggal</h4>
              <span className="d-block"> 2021-07-31</span>                
            </div>
          </div>
          <div className="col-sm-3">
            <div className="alert bg-red">
              <h4>Jam</h4>
              <span className="d-block"> <span className="live-clock">14:53:23</span></span>                
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12 col-12">
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
                        <td>Nama Dosen : Yuni</td>
                        <td>Jumlah Ujian : 12</td>
                      </tr>
                      <tr>
                        <td>Jumlah Pengguna Aktif : 0</td>
                        <td />
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
          </div>
        </div>
      </div>
    </section>


  </div>
  {/* /.content-wrapper */}</div>

        )
    }
}
