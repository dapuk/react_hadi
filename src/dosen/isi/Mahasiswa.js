import React, { Component } from 'react'
import axios from 'axios'
import qs from 'query-string'
import {Link} from 'react-router-dom'

let MarginFontAwe = {
    marginRight:'5px'
};

const api = axios.create({
    // baseURL: 'http://localhost:8000/'
    baseURL: 'https://my-json-server.typicode.com/dapuk/dbjsonhadi'
})

class Tabel extends Component {
    constructor(props){
        super(props)

        this.state = {
            paket_soal: [],
        }
    }

    componentDidMount(){
        api.get('/paket_soal')
        .then(res=>{
            this.setState({
                paket_soal: res.data
            })
        })
    }

    DeletePaket = async (idPaket) => {
        const {paket_soal} = this.state
        const data = qs.stringify({
            id:idPaket
    })

    api.delete('/paket_soal/'+idPaket,
            {
            data: data,
            headers: {'Content-type': 'application/x-www-form-urlencoded'}
            }
        ).then(json =>{
            this.setState({
                paket_soal: paket_soal.filter(paket_soal => paket_soal.id !== idPaket)
            })
            alert('Data Paket Soal berhasil dihapus!')
            this.props.history.push('/dosen/paket')
        })
    }

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
            <h1>Data Mahasiswa</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
              <li className="breadcrumb-item active">Data Mahasiswa</li>
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
                    <h3 className="card-title">Data Mahasiswa</h3>
                    <div className="card-tools">
                        {/* <Link to="/dosen/tambahpaket/" className="btn btn-sm btn-primary">
                            <i className="fas fa-plus" /> Tambah Data Mahasiswa
                        </Link> */}
                    </div>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                    <table className="dataTable table table-bordered table-hover">
                    <thead>
                        <tr>
                        <th>No</th>
                        <th>Kode Seksi</th>
                        <th>Matakuliah</th>
                        <th>#</th>
                        </tr>
                    </thead>
                    <tbody>
                          <tr>
                            <td>1</td>
                            <td>1512600004</td>
                            <td>Algoritma dan Pemrograman A</td>
                            <td>
                            <button type="button" className="btn btn-success btn-sm" data-toggle="modal" data-target="#modal-mahasiswa-a">
                                    Daftar Mahasiswa
                                </button>				
<div className="modal fade" id="modal-mahasiswa-a">
                                  <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <h4 className="modal-title">Daftar Mahasiswa: Algoritma dan Pemrograman A</h4>
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
                                              </tr> 

                                              <tr>
                                                <td>
                                                  15126171
                                                </td>
                                                <td>
                                                  Nugraha
                                                </td>
                                              </tr> 

                                              <tr>
                                                <td>
                                                  15126172
                                                </td>
                                                <td>
                                                  Nisrina Friyal
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
                            </td>
                          </tr>

                          <tr>
                            <td>2</td>
                            <td>1512600005</td>
                            <td>Algoritma dan Pemrograman B</td>
                            <td>
                            <button type="button" className="btn btn-success btn-sm" data-toggle="modal" data-target="#modal-mahasiswa-b">
                                    Daftar Mahasiswa
                                </button>				
<div className="modal fade" id="modal-mahasiswa-b">
                                  <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <h4 className="modal-title">Daftar Mahasiswa: Algoritma dan Pemrograman B</h4>
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
                                              </tr> 

                                              <tr>
                                                <td>
                                                  15126171
                                                </td>
                                                <td>
                                                  Nugraha
                                                </td>
                                              </tr> 

                                              <tr>
                                                <td>
                                                  15126172
                                                </td>
                                                <td>
                                                  Nisrina Friyal
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
                            </td>
                          </tr>

                          <tr>
                            <td>3</td>
                            <td>1512600004</td>
                            <td>Algoritma dan Pemrograman C</td>
                            <td>
                            <button type="button" className="btn btn-success btn-sm" data-toggle="modal" data-target="#modal-mahasiswa-c">
                                    Daftar Mahasiswa
                                </button>				
<div className="modal fade" id="modal-mahasiswa-c">
                                  <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <h4 className="modal-title">Daftar Mahasiswa: Algoritma dan Pemrograman C</h4>
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
                                              </tr> 

                                              <tr>
                                                <td>
                                                  15126171
                                                </td>
                                                <td>
                                                  Nugraha
                                                </td>
                                              </tr> 

                                              <tr>
                                                <td>
                                                  15126172
                                                </td>
                                                <td>
                                                  Nisrina Friyal
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

export default Tabel;
