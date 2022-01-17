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
            <h1>Data Ujian</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
              <li className="breadcrumb-item active">Data Ujian</li>
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
                    <h3 className="card-title">Data Soal Ujian</h3>
                    <div className="card-tools">
                        <Link to="/dosen/tambahujian/" className="btn btn-sm btn-primary">
                            <i className="fas fa-plus" /> Tambah Ujian
                        </Link>
                    </div>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                    <table className="dataTable table table-bordered table-hover">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Paket Soal</th>
                        <th>Kode Seksi</th>
                        <th>Semester</th>
                        <th>Matakuliah</th>
                        <th>Jenis Ujian</th>
                        <th>Waktu</th>
                        <th>Durasi Waktu Ujian</th>
                        <th>Status</th>
                        <th>Hasil Ujian</th>
                        <th>Ekspor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>11600011</td>
                        <td>1512600004</td>
                        <td>115</td>
                        <td>Algoritma dan Pemrograman A</td>
                        <td>
                            UAS 
                        </td>
                        <td>                  
                            31/07/2021 15:00                     
                        </td>
                        <td>                  
                            60 Menit                     
                        </td>
                        <td>
                            Selesai
                        </td>
                        <td>
                        <button type="button" className="btn btn-success btn-sm" data-toggle="modal" data-target="#modal-hasil">
                                    Lihat Hasil
                            </button>
                        </td>
                        <td>
                            <button>Export to xls</button>
                        </td>
                        </tr>

                        <tr>
                        <td>2</td>
                        <td>11600012</td>
                        <td>1512600005</td>
                        <td>115</td>
                        <td>Algoritma dan Pemrograman B</td>
                        <td>
                            UAS 
                        </td>
                        <td>                  
                            01/08/2021 15:00                     
                        </td>
                        <td>                  
                            60 Menit                     
                        </td>
                        <td>
                            Sedang Berlangsung
                        </td>
                        <td>
                            <button type="button" className="btn btn-success btn-sm disabled" data-toggle="modal" data-target="#modal-hasil">
                                    Lihat Hasil
                                </button>
                        </td>
                        <td>
                            <button>Export to xls</button>
                        </td>
                        </tr>

                        <tr>
                        <td>3</td>
                        <td>11600013</td>
                        <td>1512600006</td>
                        <td>115</td>
                        <td>Algoritma dan Pemrograman C</td>
                        <td>
                            UAS 
                        </td>
                        <td>                  
                            02/08/2021 15:00                     
                        </td>
                        <td>                  
                            60 Menit                     
                        </td>
                        <td>
                            Selesai
                        </td>
                        <td>
                        <button type="button" className="btn btn-success btn-sm" data-toggle="modal" data-target="#modal-hasil">
                                    Lihat Hasil
                            </button>
                        </td>
                        <td>
                            <button>Export to xls</button>
                        </td>
                        </tr>

                        <tr>
                        <td>4</td>
                        <td>11600021</td>
                        <td>1512600007</td>
                        <td>115</td>
                        <td>Komunikasi Data A</td>
                        <td>
                            UTS 
                        </td>
                        <td>                  
                            03/08/2021 15:00                     
                        </td>
                        <td>                  
                            60 Menit                     
                        </td>
                        <td>
                            Sedang Berlangsung
                        </td>
                        <td>
                        <button type="button" className="btn btn-success btn-sm disabled" data-toggle="modal" data-target="#modal-hasil">
                                    Lihat Hasil
                                </button>
                        </td>
                        <td>
                            <button>Export to xls</button>
                        </td>
                        </tr>

                        <tr>
                        <td>5</td>
                        <td>11600022</td>
                        <td>1512600008</td>
                        <td>115</td>
                        <td>Komunikasi Data B</td>
                        <td>
                            UTS 
                        </td>
                        <td>                  
                            04/08/2021 15:00                     
                        </td>
                        <td>                  
                            60 Menit                     
                        </td>
                        <td>
                            Sedang Berlangsung
                        </td>
                        <td>
                                <button type="button" className="btn btn-success btn-sm disabled" data-toggle="modal" data-target="#modal-hasil">
                                    Lihat Hasil
                                </button>
                        </td>
                        <td>
                            <button>Export to xls</button>
                        </td>
                        </tr>

                        <tr>
                        <td>6</td>
                        <td>11600023</td>
                        <td>1512600009</td>
                        <td>115</td>
                        <td>Komunikasi Data C</td>
                        <td>
                            UTS 
                        </td>
                        <td>                  
                            05/08/2021 15:00                     
                        </td>
                        <td>                  
                            60 Menit                     
                        </td>
                        <td>
                            Selesai
                        </td>
                        <td>
                        <button type="button" className="btn btn-success btn-sm" data-toggle="modal" data-target="#modal-hasil">
                                    Lihat Hasil
                            </button>
                        </td>
                        <td>
                            <button>Export to xls</button>
                        </td>
                        </tr>

                        <tr>
                        <td>7</td>
                        <td>11600031</td>
                        <td>1512600016</td>
                        <td>115</td>
                        <td>Interaksi Manusia dan Komputer A</td>
                        <td>
                            UAS 
                        </td>
                        <td>                  
                            06/08/2021 15:00                     
                        </td>
                        <td>                  
                            60 Menit                     
                        </td>
                        <td>
                            Selesai
                        </td>
                        <td>
                        <button type="button" className="btn btn-success btn-sm" data-toggle="modal" data-target="#modal-hasil">
                                    Lihat Hasil
                            </button>
                        </td>
                        <td>
                            <button>Export to xls</button>
                        </td>
                        </tr>

                        <tr>
                        <td>8</td>
                        <td>11600032</td>
                        <td>1512600017</td>
                        <td>115</td>
                        <td>Interaksi Manusia dan Komputer B</td>
                        <td>
                            UAS 
                        </td>
                        <td>                  
                            07/08/2021 15:00                     
                        </td>
                        <td>                  
                            60 Menit                     
                        </td>
                        <td>
                            Selesai
                        </td>
                        <td>
                        <button type="button" className="btn btn-success btn-sm" data-toggle="modal" data-target="#modal-hasil">
                                    Lihat Hasil
                            </button>
                        </td>
                        <td>
                            <button>Export to xls</button>
                        </td>
                        </tr>

                        <tr>
                        <td>9</td>
                        <td>11600033</td>
                        <td>1512600018</td>
                        <td>115</td>
                        <td>Interaksi Manusia dan Komputer C</td>
                        <td>
                            UAS 
                        </td>
                        <td>                  
                            08/08/2021 15:00                     
                        </td>
                        <td>                  
                            60 Menit                     
                        </td>
                        <td>
                            Sedang Berlangsung
                        </td>
                        <td>
                            <button type="button" className="btn btn-success btn-sm disabled" data-toggle="modal" data-target="#modal-hasil">
                                    Lihat Hasil
                            </button>
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

        <div className="modal fade" id="modal-hasil">
            <div className="modal-dialog modal-xl">
            <div className="modal-content">
                <div className="modal-header">
                <h4 className="modal-title">Daftar Nilai Mahasiswa</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                </div>
                <div className="modal-body">
                <table className="dataTable table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>NIM</th>
                            <th>Nama Mahasiswa</th>
                            <th>Nilai</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                            15126170
                        </td>
                        <td>
                            M. Hadiyatullah
                        </td>
                        <td>
                            85
                        </td>
                        </tr> 

                        <tr>
                        <td>
                            15126171
                        </td>
                        <td>
                            Nugraha
                        </td>
                        <td>
                            85
                        </td>
                        </tr> 

                        <tr>
                        <td>
                            15126172
                        </td>
                        <td>
                            Nisrina Friyal
                        </td>
                        <td>
                            85
                        </td>
                        </tr>                                              
                    </tbody>
                    </table>
                </div>
                {/* <div className="modal-footer justify-content-between">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
                </div> */}
            </div>
            {/* /.modal-content */}
            </div>
            {/* /.modal-dialog */}
        </div>
        {/* /.modal */}

  </div>
  {/* /.content-wrapper */}</div>

        )
    }
}
