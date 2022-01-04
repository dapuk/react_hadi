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
                        <th>Bank Soal</th>
                        <th>Mata Kuliah</th>
                        <th>Kode Seksi</th>
                        <th>Jenis Ujian</th>
                        <th>Nomor Paket Soal</th>
                        <th>Waktu Mulai</th>
                        <th>Waktu Berakhir</th>
                        <th>Durasi</th>
                        <th>Jumlah Soal</th>
                        <th>Status</th>
                        <th>Opsi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.paket_soal.map(paket_soal=>
                          <tr key={paket_soal.id}>
                            <td>{paket_soal.bank_soal}</td>
                            <td>{paket_soal.matkul}</td>
                            <td>{paket_soal.kode_seksi}</td>
                            <td>{paket_soal.jenis_ujian}</td>
                            <td>{paket_soal.no_paket_ujian}</td>
                            <td>{paket_soal.waktu_mulai}</td>
                            <td>{paket_soal.waktu_selesai}</td>
                            <td>{paket_soal.durasi} Menit</td>
                            <td>{paket_soal.jumlah_soal}</td>
                            <td>
                                <button>Draft</button>
                                <button>Terbit</button>
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
