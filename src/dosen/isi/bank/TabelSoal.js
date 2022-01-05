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

class TabelSoal extends Component {
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
                      <h3 className="card-title">Soal</h3>
                      <div className="card-tools">
                          {/* <Link to="/dosen/tambahbank/" className="btn btn-sm btn-primary">
                              <i className="fas fa-plus" /> Tambah Data Bank Soal
                          </Link> */}
                      </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                      <table className="dataTable table table-bordered table-hover">
                      <thead>
                          <tr>
                          <th>Soal</th>
                          <th>Jawaban</th>
                          <th>Status</th>
                          <th>Opsi</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>
                                Berikut ini yang merupakan framework dari HTML adalah...
                              </td>
                              <td>Bootstrap</td>
                              <td>
                                <button  onClick={()=> {if(window.confirm('Apakah anda yakin akan draft soal ? Soal yang telah didraftkan tidak dapat diubah kembali!')){ alert("Soal Berhasil Didraft!") };}} style={{ marginRight: "5px" }}>Draft</button>
                                <button  onClick={()=> {if(window.confirm('Apakah anda yakin akan menerbitkan soal ? Soal yang telah diterbitkan tidak dapat diubah kembali!')){ alert("Soal Berhasil Diterbit!") };}}>Terbit</button>
                              </td>
                              <td>
                                <button className="btn btn-sm btn-warning" style={MarginFontAwe}>
                                    <i className="fas fa-edit" /> Ubah
                                </button>

                                <button onClick={()=> {if(window.confirm('Yakin ingin dihapus?')){alert("Berhasil Dihapus!")};}} className="btn btn-sm btn-danger">
                                    <i className="fas fa-trash" /> Hapus
                                </button>
                              </td>
                          </tr>
                          
                          <tr>
                              <td>
                              Bahasa yang digunakan untuk mengubah tampilan web adalah...
                              </td>
                              <td>CSS</td>
                              <td>
                                <button  onClick={()=> {if(window.confirm('Apakah anda yakin akan draft soal ? Soal yang telah didraftkan tidak dapat diubah kembali!')){ alert("Soal Berhasil Didraft!") };}} style={{ marginRight: "5px" }}>Draft</button>
                                <button  onClick={()=> {if(window.confirm('Apakah anda yakin akan menerbitkan soal ? Soal yang telah diterbitkan tidak dapat diubah kembali!')){ alert("Soal Berhasil Diterbit!") };}}>Terbit</button>
                              </td>
                              <td>
                                <button className="btn btn-sm btn-warning" style={MarginFontAwe}>
                                    <i className="fas fa-edit" /> Ubah
                                </button>

                                <button onClick={()=> {if(window.confirm('Yakin ingin dihapus?')){alert("Berhasil Dihapus!")};}} className="btn btn-sm btn-danger">
                                    <i className="fas fa-trash" /> Hapus
                                </button>
                              </td>
                          </tr>
                          
                          <tr>
                              <td>
                                Berikut ini yang bukan framework dari Javascript adalah...
                              </td>
                              <td>Django</td>
                              <td>
                                <button  onClick={()=> {if(window.confirm('Apakah anda yakin akan draft soal ? Soal yang telah didraftkan tidak dapat diubah kembali!')){ alert("Soal Berhasil Didraft!") };}} style={{ marginRight: "5px" }}>Draft</button>
                                <button  onClick={()=> {if(window.confirm('Apakah anda yakin akan menerbitkan soal ? Soal yang telah diterbitkan tidak dapat diubah kembali!')){ alert("Soal Berhasil Diterbit!") };}}>Terbit</button>
                              </td>
                              <td>
                                <button className="btn btn-sm btn-warning" style={MarginFontAwe}>
                                    <i className="fas fa-edit" /> Ubah
                                </button>

                                <button onClick={()=> {if(window.confirm('Yakin ingin dihapus?')){alert("Berhasil Dihapus!")};}} className="btn btn-sm btn-danger">
                                    <i className="fas fa-trash" /> Hapus
                                </button>
                              </td>
                          </tr>
                          
                          <tr>
                              <td>
                              Kepanjangan dari HTML adalah...
                              </td>
                              <td>Hyper Text Markup Language</td>
                              <td>
                                <button  onClick={()=> {if(window.confirm('Apakah anda yakin akan draft soal ? Soal yang telah didraftkan tidak dapat diubah kembali!')){ alert("Soal Berhasil Didraft!") };}} style={{ marginRight: "5px" }}>Draft</button>
                                <button  onClick={()=> {if(window.confirm('Apakah anda yakin akan menerbitkan soal ? Soal yang telah diterbitkan tidak dapat diubah kembali!')){ alert("Soal Berhasil Diterbit!") };}}>Terbit</button>
                              </td>
                              <td>
                                <button className="btn btn-sm btn-warning" style={MarginFontAwe}>
                                    <i className="fas fa-edit" /> Ubah
                                </button>

                                <button onClick={()=> {if(window.confirm('Yakin ingin dihapus?')){alert("Berhasil Dihapus!")};}} className="btn btn-sm btn-danger">
                                    <i className="fas fa-trash" /> Hapus
                                </button>
                              </td>
                          </tr>
                          
                          <tr>
                              <td>
                              Kepanjangan dari CSS adalah...
                              </td>
                              <td>Cascading Style Sheet</td>
                              <td>
                                <button  onClick={()=> {if(window.confirm('Apakah anda yakin akan draft soal ? Soal yang telah didraftkan tidak dapat diubah kembali!')){ alert("Soal Berhasil Didraft!") };}} style={{ marginRight: "5px" }}>Draft</button>
                                <button  onClick={()=> {if(window.confirm('Apakah anda yakin akan menerbitkan soal ? Soal yang telah diterbitkan tidak dapat diubah kembali!')){ alert("Soal Berhasil Diterbit!") };}}>Terbit</button>
                              </td>
                              <td>
                                <button className="btn btn-sm btn-warning" style={MarginFontAwe}>
                                    <i className="fas fa-edit" /> Ubah
                                </button>

                                <button onClick={()=> {if(window.confirm('Yakin ingin dihapus?')){alert("Berhasil Dihapus!")};}} className="btn btn-sm btn-danger">
                                    <i className="fas fa-trash" /> Hapus
                                </button>
                              </td>
                          </tr>
                          
                          <tr>
                              <td>
                              PHP adalah bahasa pemrograman web yang digunakan untuk...
                              </td>
                              <td>Membuat web menjadi dinamis</td>
                              <td>
                                <button  onClick={()=> {if(window.confirm('Apakah anda yakin akan draft soal ? Soal yang telah didraftkan tidak dapat diubah kembali!')){ alert("Soal Berhasil Didraft!") };}} style={{ marginRight: "5px" }}>Draft</button>
                                <button  onClick={()=> {if(window.confirm('Apakah anda yakin akan menerbitkan soal ? Soal yang telah diterbitkan tidak dapat diubah kembali!')){ alert("Soal Berhasil Diterbit!") };}}>Terbit</button>
                              </td>
                              <td>
                                <button className="btn btn-sm btn-warning" style={MarginFontAwe}>
                                    <i className="fas fa-edit" /> Ubah
                                </button>

                                <button onClick={()=> {if(window.confirm('Yakin ingin dihapus?')){alert("Berhasil Dihapus!")};}} className="btn btn-sm btn-danger">
                                    <i className="fas fa-trash" /> Hapus
                                </button>
                              </td>
                          </tr>
                          
                          <tr>
                              <td>
                              Di bawah ini yang bukan merupakan tipe data primitif pada Javascript adalah...
                              </td>
                              <td>Array</td>
                              <td>
                                <button  onClick={()=> {if(window.confirm('Apakah anda yakin akan draft soal ? Soal yang telah didraftkan tidak dapat diubah kembali!')){ alert("Soal Berhasil Didraft!") };}} style={{ marginRight: "5px" }}>Draft</button>
                                <button  onClick={()=> {if(window.confirm('Apakah anda yakin akan menerbitkan soal ? Soal yang telah diterbitkan tidak dapat diubah kembali!')){ alert("Soal Berhasil Diterbit!") };}}>Terbit</button>
                              </td>
                              <td>
                                <button className="btn btn-sm btn-warning" style={MarginFontAwe}>
                                    <i className="fas fa-edit" /> Ubah
                                </button>

                                <button onClick={()=> {if(window.confirm('Yakin ingin dihapus?')){alert("Berhasil Dihapus!")};}} className="btn btn-sm btn-danger">
                                    <i className="fas fa-trash" /> Hapus
                                </button>
                              </td>
                          </tr>
                          
                          <tr>
                              <td>
                              Di bawah ini yang merupakan aplikasi DBMS adalah...
                              </td>
                              <td>MySQL</td>
                              <td>
                                <button  onClick={()=> {if(window.confirm('Apakah anda yakin akan draft soal ? Soal yang telah didraftkan tidak dapat diubah kembali!')){ alert("Soal Berhasil Didraft!") };}} style={{ marginRight: "5px" }}>Draft</button>
                                <button  onClick={()=> {if(window.confirm('Apakah anda yakin akan menerbitkan soal ? Soal yang telah diterbitkan tidak dapat diubah kembali!')){ alert("Soal Berhasil Diterbit!") };}}>Terbit</button>
                              </td>
                              <td>
                                <button className="btn btn-sm btn-warning" style={MarginFontAwe}>
                                    <i className="fas fa-edit" /> Ubah
                                </button>

                                <button onClick={()=> {if(window.confirm('Yakin ingin dihapus?')){alert("Berhasil Dihapus!")};}} className="btn btn-sm btn-danger">
                                    <i className="fas fa-trash" /> Hapus
                                </button>
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
export default TabelSoal;
