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
            <h1>Data Paket Soal</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
              <li className="breadcrumb-item active">Data Paket Soal</li>
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
                    <h3 className="card-title">Data Paket Soal</h3>
                    <div className="card-tools">
                        <Link to="/dosen/tambahpaket/" className="btn btn-sm btn-primary">
                            <i className="fas fa-plus" /> Tambah Data Paket Soal
                        </Link>
                    </div>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                    <table className="dataTable table table-bordered table-hover">
                    <thead>
                        <tr>
                        <th>Mata Kuliah</th>
                        <th>Kode Seksi</th>
                        <th>Jenis Ujian</th>
                        <th>Nomor Paket Soal</th>
                        <th>Waktu Ujian</th>
                        <th>Durasi Ujian</th>
                        <th>Jumlah Soal</th>
                        <th>Status</th>
                        <th>Opsi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.paket_soal.map(paket_soal=>
                          <tr key={paket_soal.id}>
                            <td>{paket_soal.matkul}</td>
                            <td>{paket_soal.kode_seksi}</td>
                            <td>{paket_soal.jenis_ujian}</td>
                            <td>{paket_soal.no_paket_ujian}</td>
                            <td>{paket_soal.waktu_mulai}</td>
                            <td>{paket_soal.durasi} Menit</td>
                            <td>
                                <button type="button" className="btn btn-success btn-sm" data-toggle="modal" data-target="#modal-soal">
                                    Lihat {paket_soal.jumlah_soal}  Soal
                                </button>

                                <div className="modal fade" id="modal-soal">
                                  <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <h4 className="modal-title">Daftar Soal</h4>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                          <span aria-hidden="true">×</span>
                                        </button>
                                      </div>
                                      <div className="modal-body">
                                        <table className="dataTable table table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                  <th width="1%">No.</th>
                                                  <th>Soal</th>
                                                  <th width="10%">#</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td>
                                                  1
                                                </td>
                                                <td>
                                                  <p>Berikut ini yang merupakan framework dari HTML adalah...</p>
                                                  <ol type="A">
                                                  <b><li>Bootstrap</li></b>
                                                    <li>Flask</li>
                                                    <li>Flutter</li>
                                                    <li>Laravel</li>
                                                    <li>Codeigniter</li>
                                                  </ol>
                                                </td>
                                                <td>
                                                  <div>
                                                    <input type="checkbox" style={{ marginRight: "5px" }} />Pilih Soal
                                                  </div>
                                                </td>
                                              </tr>

                                              <tr>
                                                <td>
                                                  2
                                                </td>
                                                <td>
                                                  <p>Bahasa yang digunakan untuk mengubah tampilan web adalah...</p>
                                                  <ol type="A">
                                                  <li>Java</li>
                                                  <b><li>CSS</li></b>
                                                    <li>JavaScript</li>
                                                    <li>PHP</li>
                                                    <li>Phyton</li>
                                                  </ol>
                                                </td>
                                                <td>
                                                  <div>
                                                    <input type="checkbox" style={{ marginRight: "5px" }} />Pilih Soal
                                                  </div>
                                                </td>
                                              </tr>

                                              <tr>
                                                <td>
                                                  3
                                                </td>
                                                <td>
                                                  <p>Berikut ini yang bukan framework dari Javascript adalah...</p>
                                                  <ol type="A">
                                                  <li>Vue</li>
                                                    <li>Angular</li>
                                                    <li>Next</li>
                                                    <b><li>Django</li></b>
                                                    <li>Node.js</li>
                                                  </ol>
                                                </td>
                                                <td>
                                                  <div>
                                                    <input type="checkbox" style={{ marginRight: "5px" }} />Pilih Soal
                                                  </div>
                                                </td>
                                              </tr>

                                              <tr>
                                                <td>
                                                  4
                                                </td>
                                                <td>
                                                  <p>Kepanjangan dari HTML adalah...</p>
                                                  <ol type="A">
                                                  <li>Hipo Text Markup Language</li>
                                                    <li>Hiper Text Markup Language</li>
                                                    <b><li>Hyper Text Markup Language</li></b>
                                                    <li>Hyper Text Mobile Language</li>
                                                    <li>Hipo Text Mobile Language</li>
                                                  </ol>
                                                </td>
                                                <td>
                                                  <div>
                                                    <input type="checkbox" style={{ marginRight: "5px" }} />Pilih Soal
                                                  </div>
                                                </td>
                                              </tr>

                                              <tr>
                                                <td>
                                                  5
                                                </td>
                                                <td>
                                                  <p>Kepanjangan dari CSS adalah...</p>
                                                  <ol type="A">
                                                  <li>Cascading Super Sheet</li>
                                                  <b><li>Cascading Style Sheet</li></b>
                                                    <li>Cascading Style Sheet</li>
                                                    <li>Cascading Style Show</li>
                                                    <li>Cascading Sheet Show</li>
                                                  </ol>
                                                </td>
                                                <td>
                                                  <div>
                                                    <input type="checkbox" style={{ marginRight: "5px" }} />Pilih Soal
                                                  </div>
                                                </td>
                                              </tr>

                                              <tr>
                                                <td>
                                                  6
                                                </td>
                                                <td>
                                                  <p>PHP adalah bahasa pemrograman web yang digunakan untuk...</p>
                                                  <ol type="A">
                                                  <li>Mengubah tampilan web</li>
                                                    <li>Mengubah tampilan web</li>
                                                    <li>Membuat halaman web</li>
                                                    <li>Mengelola versi web</li>
                                                    <b><li>Membuat web menjadi dinamis</li></b>
                                                  </ol>
                                                </td>
                                                <td>
                                                  <div>
                                                    <input type="checkbox" style={{ marginRight: "5px" }} />Pilih Soal
                                                  </div>
                                                </td>
                                              </tr>

                                              <tr>
                                                <td>
                                                  7
                                                </td>
                                                <td>
                                                  <p>Di bawah ini yang bukan merupakan tipe data primitif pada Javascript adalah...</p>
                                                  <ol type="A">
                                                  <b><li>Array</li></b>
                                                    <li>Number</li>
                                                    <li>String</li>
                                                    <li>Booelan</li>
                                                    <li>Null</li>
                                                  </ol>
                                                </td>
                                                <td>
                                                  <div>
                                                    <input type="checkbox" style={{ marginRight: "5px" }} />Pilih Soal
                                                  </div>
                                                </td>
                                              </tr>

                                              <tr>
                                                <td>
                                                  8
                                                </td>
                                                <td>
                                                  <p>Di bawah ini yang merupakan aplikasi DBMS adalah...</p>
                                                  <ol type="A">
                                                  <li>Kubernetes</li>
                                                    <li>Docker</li>
                                                    <b><li>MySQL</li></b>
                                                    <li>Microsoft Azure</li>
                                                    <li>Amazon Web Services</li>
                                                  </ol>
                                                </td>
                                                <td>
                                                  <div>
                                                    <input type="checkbox" style={{ marginRight: "5px" }} />Pilih Soal
                                                  </div>
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
                            <td>
                                <button  onClick={()=> {if(window.confirm('Apakah anda yakin akan menerbitkan paket soal ? Soal yang telah diterbitkan tidak dapat diubah kembali!')){ alert("Soal Berhasil Diterbit!") };}}>Terbit</button>
                            </td>
                            <td>
                              <Link to=
                                {
                                  {
                                    pathname: '/dosen/ubahpaket',
                                    state: {
                                      id: paket_soal.id,
                                      bank_soal: paket_soal.bank_soal,
                                      matkul: paket_soal.matkul,
                                      kode_seksi: paket_soal.kode_seksi,
                                      jenis_ujian: paket_soal.jenis_ujian,
                                      no_paket_ujian: paket_soal.no_paket_ujian,
                                      waktu_mulai: paket_soal.waktu_mulai,
                                      waktu_selesai: paket_soal.waktu_selesai,
                                      durasi: paket_soal.durasi,
                                      jumlah_soal: paket_soal.jumlah_soal,
                                    }
                                  }
                                } 
                                >
                                  <button className="btn btn-sm btn-warning" style={MarginFontAwe}>
                                    <i className="fas fa-edit" /> Ubah
                                  </button>
                              </Link>

                              <button onClick={()=> {if(window.confirm('Yakin ingin dihapus?')){this.DeletePaket(paket_soal.id)};}} className="btn btn-sm btn-danger">
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
