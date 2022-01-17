import React, { Component } from 'react'
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import Moment from 'moment';

export default class Tambah extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            values: [],
            count: 0
         };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    createUI(){
        return this.state.values.map((el, i) => 
            <div key={i}>
                <div className="form-group">
                    <tr>
                        <td>
                            <button className="btn btn-success btn-sm" onClick={this.addClick.bind(this, i)}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </td>
                        <td>
                            <select className='form-control' name="paketsoal"  required>
                            <option selected disabled value=""> - Pilih Nomor Paket Soal - </option>
                            <option value="11600011">11600011</option>
                            <option value="11600012">11600012</option>
                            <option value="11600013">11600013</option>
                            </select>
                        </td>
                        <td>
                            <button className="btn btn-danger btn-sm" onClick={this.removeClick.bind(this, i)}>
                                <i className="fa fa-times"></i>
                            </button>
                        </td>
                    </tr>
                </div>
            </div>          
        )
     }
     
     addClick(){
       this.setState(prevState => ({ values: [...prevState.values, '']}))
       this.setState(prevState => {
        return {count: prevState.count + 1}
     })
     }

     removeClick(i){
        let values = [...this.state.values];
        values.splice(i,1);
        this.setState({ values });
        this.setState(prevState => {
            return {count: prevState.count - 1}
         })
     }

     handleSubmit(event) {
        alert('A name was submitted: ' + this.state.values.join(', '));
        event.preventDefault();
      }

      simpanUjian = (e) => {
        alert('Data Ujian Berhasil Ditambah!')
        this.props.history.push('/dosen/ujian')
    }

    render() {
        let posisikanan = {
            float:'right'
        };

        return (
        <div>
  {/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Tambah Data Ujian</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
              <li className="breadcrumb-item"><a href="#">Data Ujian</a></li>
              <li className="breadcrumb-item active">Tambah Data Ujian</li>
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
                            <h3 className="card-title">Tambah Soal Ujian</h3>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Matakuliah</label>
                                <select className="form-control" name="matkul"  required>
                                <option selected disabled value=""> - Pilih Mata Kuliah - </option>
                                <option value="Algoritma Pemrograman">Algoritma Pemrograman</option>
                                <option value="Komunikasi Data">Komunikasi Data</option>
                                <option value="Interaksi Manusia dan Komputer">Interaksi Manusia dan Komputer</option>
                                </select>
                            </div> 

                            <div className="form-group">
                                <label>Kode Seksi</label>
                                <select className="form-control" name="kodeseksi"  required>
                                <option selected disabled value=""> - Pilih Kode Seksi - </option>
                                <option value="1512600004">1512600004</option>
                                <option value="1512600005">1512600005</option>
                                <option value="1512600006">1512600006</option>
                                </select>
                            </div> 

                            <div className="form-group">
                                <label>Jawaban</label>
                                <div className="form-group">
                                    <tr>
                                        <td>
                                            <button className="btn btn-success btn-sm" onClick={this.addClick.bind(this)}>
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </td>
                                        <td>
                                            <select className='form-control' name="paketsoal"  required>
                                            <option selected disabled value=""> - Pilih Nomor Paket Soal - </option>
                                            <option value="11600011">11600011</option>
                                            <option value="11600012">11600012</option>
                                            <option value="11600013">11600013</option>
                                            </select>
                                        </td>
                                    </tr>
                                </div>
                                
                                {this.createUI()}
                            </div>    

                            <div className="form-group">
                                <label>Waktu Ujian</label>
                                <Datetime 
                                    clearable
                                    value=""
                                    dateFormat="DD/MM/YYYY"
                                    timeFormat="HH:mm"
                                    ampm={false}
                                    name="waktu_ujian" 
                                />
                            </div> 

                            <div className="form-group">
                                <label>Durasi Pelaksanaan (Menit)</label>
                                <input type="text" className="form-control" name="durasi" />
                            </div> 
                        </div>
                        <div className="card-footer">
                        <button type="button"  onClick={()=> {this.simpanUjian()}} className="btn btn-success btn-sm"  data-dismiss="modal">
                                    Simpan
                        </button>
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
