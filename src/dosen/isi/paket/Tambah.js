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
            bank_soal: '',
            matkul: '',
            jenis_ujian: '',
            no_paket_ujian: '',
            waktu_mulai: '',
            waktu_selesai: '',
            durasi: '',
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
            bank_soal: this.state.bank_soal,
            matkul: this.state.matkul,
            jenis_ujian: this.state.jenis_ujian,
            no_paket_ujian: this.state.no_paket_ujian,
            waktu_mulai: this.state.waktu_mulai,
            waktu_selesai: this.state.waktu_selesai,
            durasi: this.state.durasi,
            jumlah_soal: this.state.jumlah_soal
        }).then( json => {
            alert('Data Paket Soal berhasil ditambah!')
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
                                                <label>Bank Soal</label>
                                                <select className="form-control" name="bank_soal" defaultValue={this.state.bank_soal}  onChange={this.handleChange} required>
                                                <option selected disabled value=""> - Pilih Bank Soal - </option>
                                                <option value="101235">101235</option>
                                                <option value="123456">123456</option>
                                                </select>
                                            </div> 

                                            <div className="form-group">
                                                <label>Matakuliah</label>
                                                <select className="form-control" name="matkul"  defaultValue={this.state.matkul}  onChange={this.handleChange}  required>
                                                <option selected disabled value=""> - Pilih Mata Kuliah - </option>
                                                <option value="Dasar Pemrograman">Dasar Pemrograman</option>
                                                <option value="Bahasa Inggris">Bahasa Inggris</option>
                                                </select>
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
                                                <label>Nomor Paket Soal</label>
                                                <input type="text" className="form-control" name="no_paket_ujian" value={this.state.no_paket_ujian}  onChange={this.handleChange}  />
                                            </div>   

                                            <div className="form-group">
                                                <label>Waktu Pelaksanaan</label>
                                                <Datetime 
                                                    clearable
                                                    value={this.state.waktu_mulai}
                                                    dateFormat="DD/MM/YYYY"
                                                    timeFormat="HH:mm"
                                                    ampm={false}
                                                    name="waktu_mulai" 
                                                    onChange={(date) => { this.props.onDateChange && this.props.onDateChange(date);this.setState({ waktu_mulai: Moment(date).format('DD/MM/YYYY HH:mm') }); }}
                                                />
                                            </div> 

                                            <div className="form-group">
                                                <label>Waktu Berakhir</label>
                                                <Datetime 
                                                    value={this.state.waktu_selesai}
                                                    dateFormat="DD/MM/YYYY"
                                                    timeFormat="HH:mm"
                                                    locale= 'id, ID'
                                                    name="waktu_selesai" 
                                                    onChange={(date) => { this.props.onDateChange && this.props.onDateChange(date);this.setState({ waktu_selesai: Moment(date).format('DD/MM/YYYY HH:mm') }); }}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label>Durasi Pelaksanaan (Menit)</label>
                                                <input type="text" className="form-control" name="durasi"  value={this.state.durasi}  onChange={this.handleChange} />
                                            </div> 

                                            <div className="form-group">
                                                <label>Jumlah Soal</label>
                                                <input type="text" className="form-control" name="jumlah_soal"  value={this.state.jumlah_soal}  onChange={this.handleChange} />
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
