import React, { Component } from 'react'

export default class Tambah extends Component {
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
            <h1>Tambah Data Bank Soal</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
              <li className="breadcrumb-item"><a href="#">Data Bank Soal</a></li>
              <li className="breadcrumb-item active">Tambah Data Bank Soal</li>
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
                    <div className="card card-primary">
                        <div className="card-header">
                            <h3 className="card-title">Bank Soal</h3>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Kode Bank Soal</label>
                                <input type="text" className="form-control" />
                            </div>   
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Simpan</button>
                            <br />
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
