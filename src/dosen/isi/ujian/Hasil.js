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
                        <th>Semester</th>
                        <th>Matakuliah</th>
                        <th>Jenis Ujian</th>
                        <th>Paket Soal</th>
                        <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>1512600004</td>
                        <td>115</td>
                        <td>Algoritma dan Pemrograman A</td>
                        <td>UAS</td>
                        <td>11600011</td>
                        <td>
                          Selesai
                        </td>
                        </tr>

                        <tr>
                        <td>2</td>
                        <td>1512600005</td>
                        <td>115</td>
                        <td>Algoritma dan Pemrograman B</td>
                        <td>UAS</td>
                        <td>11600012</td>
                        <td>
                          Belum Selesai
                        </td>
                        </tr>

                        <tr>
                        <td>3</td>
                        <td>1512600006</td>
                        <td>115</td>
                        <td>Algoritma dan Pemrograman C</td>
                        <td>UAS</td>
                        <td>11600013</td>
                        <td>
                          Selesai
                        </td>
                        </tr>

                        <tr>
                        <td>4</td>
                        <td>1512600007</td>
                        <td>115</td>
                        <td>Komunikasi Data A</td>
                        <td>UTS</td>
                        <td>11600021</td>
                        <td>
                          Belum Selesai
                        </td>
                        </tr>

                        <tr>
                        <td>5</td>
                        <td>1512600008</td>
                        <td>115</td>
                        <td>Komunikasi Data B</td>
                        <td>UTS</td>
                        <td>11600022</td>
                        <td>
                          Belum Selesai
                        </td>
                        </tr>

                        <tr>
                        <td>6</td>
                        <td>1512600009</td>
                        <td>115</td>
                        <td>Komunikasi Data C</td>
                        <td>UTS</td>
                        <td>11600023</td>
                        <td>
                          Selesai
                        </td>
                        </tr>

                        <tr>
                        <td>7</td>
                        <td>1512600016</td>
                        <td>115</td>
                        <td>Interaksi Manusia dan Komputer A</td>
                        <td>UAS</td>
                        <td>11600031</td>
                        <td>
                          Selesai
                        </td>
                        </tr>

                        <tr>
                        <td>8</td>
                        <td>1512600017</td>
                        <td>115</td>
                        <td>Interaksi Manusia dan Komputer B</td>
                        <td>UAS</td>
                        <td>11600032</td>
                        <td>
                          Selesai
                        </td>
                        </tr>

                        <tr>
                        <td>9</td>
                        <td>1512600018</td>
                        <td>115</td>
                        <td>Interaksi Manusia dan Komputer C</td>
                        <td>UAS</td>
                        <td>11600033</td>
                        <td>
                          Belum Selesai
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
