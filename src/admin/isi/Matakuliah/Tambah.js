import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'query-string'

let MarginFontAwe = {
    marginRight:'5px'
  };
  
const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/dapuk/dbjsonhadi'
})

class Tambah extends PureComponent {   
    constructor(props){
        super(props)

        this.state = {
            nama_matkul: '',
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    addMatkul = async () => {
        api.post('/tbl_matkul', {
            nama_matkul: this.state.nama_matkul
        }).then( json => {
            alert('Data Mata Kuliah berhasil ditambah!')
            this.props.history.push('/admin/matakuliah')
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
                            <h1>Tambah Data Mata Kuliah</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                            <li className="breadcrumb-item"><a href="#">Data Mata Kuliah</a></li>
                            <li className="breadcrumb-item active">Tambah Data Mata Kuliah</li>
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
                                            <h3 className="card-title">Mata Kuliah</h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label>Nama Mata Kuliah</label>
                                                <input type="text" name="nama_matkul" value={this.state.nama_matkul} onChange={this.handleChange} className="form-control" />
                                            </div>                
                                        </div>
                                        <div className="card-footer">
                                            <button type="submit"  onClick={this.addMatkul} className="btn btn-primary">Simpan</button>
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
