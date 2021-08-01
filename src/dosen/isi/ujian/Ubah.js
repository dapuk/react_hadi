import React, { Component } from 'react'

export default class Ubah extends Component {
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
            <h1>Ubah Data Ujian</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Dasbor</a></li>
              <li className="breadcrumb-item"><a href="#">Data Ujian</a></li>
              <li className="breadcrumb-item active">Ubah Data Ujian</li>
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
                    <h3 className="card-title">Edit Data Soal Ujian</h3>
                </div>
                <form role="form" action="http://localhost/e_test/dosen/ujian/tambah" method="POST">
                    <div className="card-body">
                    <div className="form-group">
                        <label>Dosen (Maka Kuliah)</label>
                        <select className="form-control" name="dosen" required>
                        <option selected disabled value> - Pilih Dosen - </option>
                        <option value="Adi"> Adi (Dasar Pemrograman) </option>
                        <option value="Yuni"> Yuni (Bahasa Inggris) </option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputFile">Soal</label>
                        <div className="input-group">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="exampleInputFile" />
                            <label className="custom-file-label" htmlFor="exampleInputFile">Pilih File</label>
                        </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" name="soal_ujian" placeholder="Soal Ujian Text" defaultValue={""} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputFile">Jawaban A</label>
                        <div className="input-group">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="exampleInputFile" />
                            <label className="custom-file-label" htmlFor="exampleInputFile">Pilih File</label>
                        </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" name="jawaban" placeholder="Jawaban A" defaultValue={""} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputFile">Jawaban B</label>
                        <div className="input-group">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="exampleInputFile" />
                            <label className="custom-file-label" htmlFor="exampleInputFile">Pilih File</label>
                        </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" name="jawaban" placeholder="Jawaban B" defaultValue={""} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputFile">Jawaban C</label>
                        <div className="input-group">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="exampleInputFile" />
                            <label className="custom-file-label" htmlFor="exampleInputFile">Pilih File</label>
                        </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" name="jawaban" placeholder="Jawaban C" defaultValue={""} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputFile">Jawaban D</label>
                        <div className="input-group">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="exampleInputFile" />
                            <label className="custom-file-label" htmlFor="exampleInputFile">Pilih File</label>
                        </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" name="jawaban" placeholder="Jawaban D" defaultValue={""} />
                    </div>
                    <div className="form-group">
                        <label>Kunci Jawaban</label>
                        <select className="form-control" name="kunci_jawaban" required>
                        <option selected disabled value> - Pilih Kunci Jawaban - </option>
                        <option value="A"> A</option>
                        <option value="B"> B</option>
                        <option value="C"> C</option>
                        <option value="D"> D</option>
                        </select>
                    </div>
                    </div>
                    <div className="card-footer">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
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
