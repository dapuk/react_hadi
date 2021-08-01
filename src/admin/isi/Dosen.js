import React, { Component } from 'react'

export default class Dosen extends Component {
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
              <h3 className="card-title">Data Dosen</h3>
              <div className="card-tools">
                <a href="http://localhost/e_test/admin/dosen/tambah" className="btn btn-sm btn-primary">
                  <i className="fas fa-plus" /> Tambah dosen
                </a>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <table className="dataTable table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>NIP</th>
                    <th>Nama Lengkap</th>
                    <th>Email</th>
                    <th>Opsi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>01234567</td>
                    <td>Adi</td>
                    <td>adi@dosen.com</td>
                    <td>
                      <a href="http://localhost/e_test/admin/dosen/edit/">
                        <i className="fa fa-edit text-info" title="Edit dosen" />                     
                      </a>
                      <a href>
                        <i className="fa fa-trash text-danger" title="Hapus dosen" />
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
