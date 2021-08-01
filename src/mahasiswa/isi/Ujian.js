import React, { Component } from 'react'

export default class Ujian extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                    </div>{/* /.container-fluid */}
                </section>
                <section className="content">
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                            <h3 className="card-title">Data Soal Ujian</h3>
                            </div>
                            {/* /.card-header */}
                            <div className="card-body">
                            <table className="dataTable table table-bordered table-hover">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Mata Kuliah</th>
                                    <th>Jenis Ujian</th>
                                    <th>Waktu Mulai</th>
                                    <th>Waktu Berakhir</th>
                                    <th>Opsi</th>
                                    <th>Hasil</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Dasar Pemrograman</td>
                                    <td>UTS</td>
                                    <td>
                                    01, August 2021 - 01:46:46                    </td>
                                    <td>
                                    01, August 2021 - 01:46:46                    </td>
                                    <td>
                                    <a href="#" className="btn btn-xs btn-primary">
                                        <i className="fa fa-play" /> Mulai                     
                                    </a>
                                    </td>
                                    <td>
                                    Skor nilai
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
        )
    }
}
