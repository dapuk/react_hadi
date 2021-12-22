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
            <h1>Data Paket Soal</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
              <li className="breadcrumb-item active">Data Paket Soal</li>
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
                    <h3 className="card-title">Data Paket Soal</h3>
                    <div className="card-tools">
                        <Link to="/dosen/tambahpaket/" className="btn btn-sm btn-primary">
                            <i className="fas fa-plus" /> Tambah Data Paket Soal
                        </Link>
                    </div>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                    <table className="dataTable table table-bordered table-hover">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Mata Kuliah</th>
                        <th>Jenis Ujian</th>
                        <th>Nomor Paket Ujian</th>
                        <th>Waktu Mulai</th>
                        <th>Waktu Berakhir</th>
                        <th>Durasi</th>
                        <th>Opsi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Dasar Pemrograman</td>
                        <td>UTS</td>
                        <td>10101</td>
                        <td>
                            31, July 2021 - 17:26:52                    
                        </td>
                        <td>
                            31, July 2021 - 17:26:52                    
                        </td>
                        <td>
                            60 Menit                    
                        </td>
                        <td>
                            <Link to="/dosen/ubahpaket/" className="fa fa-edit text-info" >
                            </Link>    
                            <a href>
                            <i className="fa fa-trash text-danger" title="Hapus" />
                            </a>
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