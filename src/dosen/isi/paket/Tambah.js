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
            <h1>Tambah Data Paket Soal</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
              <li className="breadcrumb-item"><a href="#">Data Paket Soal</a></li>
              <li className="breadcrumb-item active">Tambah Data Paket Soal</li>
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
                            <h3 className="card-title">Paket Soal</h3>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Bank Soal</label>
                                <select className="form-control" name="dosen" required>
                                <option selected disabled value> - Pilih Bank Soal - </option>
                                <option value>101235</option>
                                </select>
                            </div> 

                            <div className="form-group">
                                <label>Matakuliah</label>
                                <select className="form-control" name="dosen" required>
                                <option selected disabled value> - Pilih Mata Kuliah - </option>
                                <option value>Dasar Pemrograman</option>
                                <option value>Bahasa Inggris</option>
                                </select>
                            </div> 

                            <div className="form-group">
                                <label>Jenis Ujian</label>
                                <select className="form-control" name="dosen" required>
                                <option selected disabled value> - Pilih Jenis Ujian - </option>
                                <option value>UTS</option>
                                <option value>UAS</option>
                                </select>
                            </div>        

                            <div className="form-group">
                                <label>Nomor Paket Soal</label>
                                <input type="text" className="form-control" />
                            </div>   

                            <div className="form-group">
                                <label>Waktu Pelaksanaan</label>
                                <div className="input-group date" id="waktupelaksanaan" data-target-input="nearest">
                                <input type="text" className="form-control datetimepicker-input" data-target="#waktupelaksanaan" />
                                <div className="input-group-append" data-target="#waktupelaksanaan" data-toggle="datetimepicker">
                                    <div className="input-group-text"><i className="fa fa-calendar" /></div>
                                </div>
                                </div>
                            </div> 

                            <div className="form-group">
                                <label>Waktu Berakhir</label>
                                <div className="input-group date" id="waktuberakhir" data-target-input="nearest">
                                <input type="text" className="form-control datetimepicker-input" data-target="#waktuberakhir" />
                                <div className="input-group-append" data-target="#waktuberakhir" data-toggle="datetimepicker">
                                    <div className="input-group-text"><i className="fa fa-calendar" /></div>
                                </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Durasi Pelaksanaan</label>
                                <div className="input-group date" id="waktudurasi" data-target-input="nearest">
                                <input type="text" className="form-control datetimepicker-input" data-target="#waktudurasi" />
                                <div className="input-group-append" data-target="#waktudurasi" data-toggle="datetimepicker">
                                    <div className="input-group-text"><i className="fa fa-clock" /></div>
                                </div>
                                </div>
                            </div> 

                            <div className="form-group">
                                <label>Jumlah Soal</label>
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
