import React, { Component } from 'react'

export default class Matakuliah extends Component {
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
              <h3 className="card-title">Data Mata Kuliah</h3>
              <div className="card-tools">
                <a href="http://localhost/e_test/admin/matakuliah/tambah" className="btn btn-sm btn-primary">
                  <i className="fas fa-plus" /> Tambah Mata Kuliah
                </a>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <table className="dataTable table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Mata Kuliah</th>
                    <th>Opsi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Dasar Pemrograman</td>
                    <td>
                      <a href="http://localhost/e_test/admin/matakuliah/edit/">
                        <i className="fa fa-edit text-info" title="Edit" />                     
                      </a>
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

        )
    }
}
