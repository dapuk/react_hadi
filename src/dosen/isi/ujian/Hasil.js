import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Tabel extends Component {
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
            <h1>Data Hasil Ujian</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
              <li className="breadcrumb-item active">Data Hasil Ujian</li>
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
                    <h3 className="card-title">Data Hasil Ujian</h3>
                    <div className="card-tools">
                    </div>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                    <table className="dataTable table table-bordered table-hover">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Kode Seksi</th>
                        <th>Bank Soal</th>
                        <th>Paket Soal</th>
                        <th>Matakuliah</th>
                        <th>Skor Nilai</th>
                        <th>Waktu</th>
                        <th>Status</th>
                        <th>Ekspor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>01</td>
                        <td>UTS FAKULTAS INFORMATIKA TAHUN 2021</td>
                        <td>11111</td>
                        <td>Dasar Pemrograman</td>
                        <td>
                            75 
                        </td>
                        <td>
                            90 Menit                    
                        </td>
                        <td>
                          Sedang Berlangsung
                        </td>
                        <td>
                            <button>Export to xls</button>
                        </td>
                        </tr>
                    </tbody>
                    </table>
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