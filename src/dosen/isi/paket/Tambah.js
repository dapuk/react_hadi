import React, { Component } from 'react'
import axios from 'axios'
import qs from 'query-string'
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import Moment from 'moment';

let MarginFontAwe = {
    marginRight:'5px'
  };
  
const api = axios.create({
    // baseURL: 'http://localhost:8000/'
    baseURL: 'https://my-json-server.typicode.com/dapuk/dbjsonhadi'
})

const headers = {
    // 'Accept': 'application/json',
    'Content-Type': 'application/json; charset=UTF-8',
    // 'Authorization': 'this-can-be-anything',
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    // 'Content-type': 'application/x-www-form-urlencoded'
};

class Tambah extends Component {  
    constructor(props){
        super(props)

        this.state = {
            id: '',
            matkul: '',
            jenis_ujian: '',
            no_paket_ujian: '',
            jumlah_soal: '',
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }
    

    addPaket = async () => {
        // await fetch(url+'/tbl_matkul', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         "nama_matkul": this.state.nama_matkul
        //     }),
        //     headers: headers,
        // }).then( respone => {
        //     respone.json()
        //     alert('Data Mata Kuliah berhasil ditambah!')
        //     this.props.history.push('/admin/matakuliah')
        // }).then((json) => 
        //     console.log(json
        // ));

        api.post('/paket_soal', {
            matkul: this.state.matkul,
            jenis_ujian: this.state.jenis_ujian,
            no_paket_ujian: this.state.no_paket_ujian,
            jumlah_soal: this.state.jumlah_soal
        }).then( json => {
            alert('Data Paket Soal berhasil ditambah!')
            this.props.history.push('/dosen/paket')
        })
    }

    simpanTambahDaftarSoal = (e) => {
        alert('Daftar Soal Berhasil Ditambah!')
        this.props.history.push('/dosen/tambahpaket')
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
                                                <label>Matakuliah</label>
                                                <select className="form-control" name="matkul"  defaultValue={this.state.matkul}  onChange={this.handleChange}  required>
                                                <option selected disabled value=""> - Pilih Mata Kuliah - </option>
                                                <option value="Algortima Pemrograman">Algortima Pemrograman</option>
                                                <option value="Komunikasi Data">Komunikasi Data</option>
                                                <option value="Interaksi Manusia dan Komputer">Interaksi Manusia dan Komputer</option>
                                                </select>
                                            </div> 

                                            <div className="form-group">
                                                <label>Nomor Paket Soal</label>
                                                <input type="text" className="form-control" name="no_paket_ujian" value={this.state.no_paket_ujian}  onChange={this.handleChange}  />
                                            </div>   

                                            <div className="form-group">
                                                <label>Jenis Ujian</label>
                                                <select className="form-control"  name="jenis_ujian"  defaultValue={this.state.jenis_ujian}  onChange={this.handleChange}  required>
                                                <option selected disabled value=""> - Pilih Jenis Ujian - </option>
                                                <option value="UTS">UTS</option>
                                                <option value="UAS">UAS</option>
                                                </select>
                                            </div>     

                                            <div className="form-group">
                                                <label>Jumlah Soal</label>
                                                <input type="text" className="form-control" name="jumlah_soal"  value={this.state.jumlah_soal}  onChange={this.handleChange} />
                                            </div>  

                                            <div className="form-group">
                                                <button type="button" className="btn btn-success btn-sm" data-toggle="modal" data-target="#modal-soal">
                                                    <i className='fa fa-plus' style={{marginRight: "5px"}}/>
                                                    Tambah Soal
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
                                                    <div className="modal-footer justify-content-between">
                                                        <button type="button"  onClick={()=> {this.simpanTambahDaftarSoal()}} className="btn btn-success btn-sm"  data-dismiss="modal">
                                                                    Simpan
                                                        </button>
                                                    </div>
                                                    </div>
                                                    {/* /.modal-content */}
                                                </div>
                                                {/* /.modal-dialog */}
                                                </div>
                                                {/* /.modal */}
                                            </div>                
                                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary"  onClick={this.addPaket}>Simpan</button>
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
};

export default Tambah;
