import React, { Component } from 'react'
import axios from 'axios'
import qs from 'query-string'
import {Link} from 'react-router-dom'
import { extend } from 'jquery'

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
      bank_soal: [],
    }
}

componentDidMount(){
    api.get('/bank_soal')
        .then(res=>{
            this.setState({
                bank_soal: res.data
            })
        })
    }

    DeleteBank = async (idBank) => {
        const {bank_soal} = this.state
        const data = qs.stringify({
            id:idBank
    })

    api.delete('/bank_soal/'+idBank,
            {
            data: data,
            headers: {'Content-type': 'application/x-www-form-urlencoded'}
            }
        ).then(json =>{
            this.setState({
              bank_soal: bank_soal.filter(bank_soal => bank_soal.id !== idBank)
            })
            alert('Data Bank Soal berhasil dihapus!')
            this.props.history.push('/dosen/bank')
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
              <h1>Data Bank Soal</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                <li className="breadcrumb-item active">Data Bank Soal</li>
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
                      <h3 className="card-title">Data Bank Soal</h3>
                      <div className="card-tools">
                          <Link to="/dosen/tambahbank/" className="btn btn-sm btn-primary">
                              <i className="fas fa-plus" /> Tambah Data Bank Soal
                          </Link>
                      </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                      <table className="dataTable table table-bordered table-hover">
                      <thead>
                          <tr>
                          <th>Kode Bank Soal</th>
                          <th>Matakuliah</th>
                          <th>Soal</th>
                          <th>Opsi</th>
                          </tr>
                      </thead>
                      <tbody>
                      {this.state.bank_soal.map(bank_soal=>
                          <tr key={bank_soal.id}>
                            <td>{bank_soal.bank_soal}</td>
                            <td>{bank_soal.matkul}</td>
                            <td>
                              <Link to="/dosen/soalbank/" className="btn btn-sm btn-primary">
                                Daftar Soal
                              </Link>
                            </td>
                            <td>
                              <Link to=
                                {
                                  {
                                    pathname: '/dosen/ubahbank',
                                    state: {
                                      id: bank_soal.id,
                                      bank_soal: bank_soal.bank_soal,
                                      matkul: bank_soal.matkul,
                                    }
                                  }
                                } 
                                >
                                  <button className="btn btn-sm btn-warning" style={MarginFontAwe}>
                                    <i className="fas fa-edit" /> Ubah
                                  </button>
                              </Link>

                              <button onClick={()=> {if(window.confirm('Yakin ingin dihapus?')){this.DeleteBank(bank_soal.id)};}} className="btn btn-sm btn-danger">
                                <i className="fas fa-trash" /> Hapus
                              </button>
                            </td>
                          </tr>
                        )}
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
