import React, { Component } from 'react'

export default class Mahasiswa extends Component {
    render() {
      let MarginFontAwe = {
        marginRight:'5px'
      };

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
              <h3 className="card-title">Data Mahasiswa</h3>
              <div className="card-tools">
                <a href="#" className="btn btn-sm btn-success" style={MarginFontAwe}>
                  <i className="fas fa-file-csv" /> Export CSV
                </a> 

                <a href="#" className="btn btn-sm btn-primary">
                  <i className="fas fa-plus" /> Tambah Mahasiswa
                </a>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <table className="dataTable table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>NIM</th>
                    <th>Nama Lengkap</th>
                    <th>Email</th>
                    <th>Angkatan</th>
                    <th>No. Telp</th>
                    <th>Opsi</th>
                  </tr>
                </thead>
                <tbody>                    
                  <tr>
                    <td>1</td>
                    <td>12183018</td>
                    <td>Budi Saja</td>
                    <td>budi@mmail.com</td>
                    <td>2018</td>
                    <td>089888888888</td>
                    <td>
                      <a href="http://localhost/e_test/admin/mahasiswa/edit/">
                        <i className="fa fa-edit text-info" title="Edit Mahasiswa" />                     
                      </a>
                      <a href>
                        <i className="fa fa-trash text-danger" title="Hapus Mahasiswa" />
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
