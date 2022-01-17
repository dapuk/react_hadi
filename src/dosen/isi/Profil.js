import React, { Component } from 'react'
import axios from 'axios'
import qs from 'query-string'
import user from '../../DOSEN_NEW.jpg'

let posisikanan = {
    float:'right'
};

let MarginFontAwe = {
    marginRight:'5px'
  };
  
  const api = axios.create({
    // baseURL: 'http://localhost:8000/'
    baseURL: 'https://my-json-server.typicode.com/dapuk/dbjsonhadi'
  })

class Profil extends Component {
    constructor(props){
        super(props)
    
        this.state = {
          id: '',
          nama: '',
          nip: '',
          nidn: '',
          nidk: '',
          email: '',
          telpon:'',
          sandi: ''

        }
    }
    
    componentDidMount(){
    api.get('/profil_dosen/'+1)
        .then(res=>{
            this.setState({
                id: res.data['id'],
                nama: res.data['nama'],
                nip: res.data['nip'],
                email: res.data['email'],
                telpon: res.data['telpon'],
                data_nama: res.data['nama'],
                data_nip: res.data['nip'],
                data_nidn: res.data['nidn'],
                data_nidk: res.data['nidk'],
                data_email: res.data['email'],
                data_telpon: res.data['telpon'],
                sandiLama: res.data['sandi'],
                sandiLamaKonfirm: '',
                sandiKonfirm: ''
            })
        })
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    handleSandi = (e) => {
        this.setState({sandi : e.target.value})
    }

    handleSandiBaru = (e) => {
        this.setState({sandiKonfirm : e.target.value})
    }

    handleSandiLama = (e) => {
        this.setState({sandiLamaKonfirm : e.target.value})
        // if (e.target.value !== this.state.sandiLama) {
        //     alert("Sandi lama tidak sama");
        //   }
    }

    ubahProfil = async (idProfil) => {
        const data = qs.stringify({
            id:idProfil,
            nama: this.state.nama,
            nip: this.state.nip,
            email: this.state.email,
            telpon: this.state.telpon,
            sandi: this.state.sandiLama
        });
    
        api.put('/profil_dosen/'+idProfil, data)
        .then( json => {
            this.setState({
                id: this.state.id,
                nama: this.state.nama,
                nip: this.state.nip,
                email: this.state.email,
                telpon: this.state.telpon,
                data_nama: this.state.nama,
                data_nip: this.state.nip,
                data_nidn: this.state.nidn,
                data_nidk: this.state.nidk,
                data_email: this.state.email,
                data_angkatan: this.state.angkatan,
                data_telpon: this.state.telpon,
              })
            alert('Profil Dosen berhasil diubah!')
            this.props.history.push('/dosen/profil')
        })
    }

    ubahPassword = async (idProfil) => {
        if (this.state.sandiLamaKonfirm !== this.state.sandiLama) {
            this.setState({
                sandi: '',
                sandiKonfirm: '',
                sandiLamaKonfirm: ''
            })
            alert("Sandi lama tidak sama");
        }else if(this.state.sandi !== this.state.sandiKonfirm) {
            this.setState({
                sandi: '',
                sandiKonfirm: '',
                sandiLamaKonfirm: ''
            })
            alert("Sandi baru tidak sama");
        }else{
            const data = qs.stringify({
                id:idProfil,
                nama: this.state.nama,
                nip: this.state.nip,
                email: this.state.email,
                telpon: this.state.telpon,
                sandi: this.state.sandiKonfirm
            });
        
            api.put('/profil_dosen/'+idProfil, data)
            .then( json => {
                alert('Password Dosen berhasil diubah!')
                this.props.history.push('/dosen/profil')
            })
        }        
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
            <h1>Profil Dosen</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
              <li className="breadcrumb-item active">Profil Dosen</li>
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
                    <h3 className="card-title">Data Profil</h3>
                    <div className="card-tools">
                    <button type="button" style={posisikanan, MarginFontAwe} className="btn btn-primary btn-sm" data-toggle="modal" data-target="#modal-profil">
                                    Ubah Profil
                                </button>
                                <div className="modal fade" id="modal-profil">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h4 className="modal-title">Ubah Profil</h4>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label>Nama</label>
                                                        <input type="text" className="form-control" name="nama"  value={this.state.nama}  disabled />
                                                    </div>

                                                    <div className="form-group">
                                                        <label>NIP</label>
                                                        <input type="text" className="form-control" name="nip"  value={this.state.nip}   disabled />
                                                    </div>

                                                    <div className="form-group">
                                                        <label>NIDK</label>
                                                        <input type="text" className="form-control" name="nidk"  value={this.state.nidk}   disabled />
                                                    </div>

                                                    <div className="form-group">
                                                        <label>NIDN</label>
                                                        <input type="text" className="form-control" name="nidn"  value={this.state.nidn}   disabled />
                                                    </div>

                                                    <div className="form-group">
                                                        <label>Email</label>
                                                        <input type="text" className="form-control" name="email"  value={this.state.email}   disabled  />
                                                    </div>

                                                    <div className="form-group">
                                                        <label>Telepon</label>
                                                        <input type="text" className="form-control" name="telpon"  value={this.state.telpon}  onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer justify-content-between">
                                            <button type="button" className="btn btn-default" data-dismiss="modal">Tutup</button>
                                            <button type="button" className="btn btn-primary"  onClick={()=>this.ubahProfil(1)} data-dismiss="modal">Ubah</button>
                                        </div>
                                        </div>
                                        {/* /.modal-content */}
                                    </div>
                                    {/* /.modal-dialog */}
                                    </div>
                                    {/* /.modal */}

                                    <button type="button" style={posisikanan} className="btn btn-primary btn-sm" data-toggle="modal" data-target="#modal-sandi">
                                    Ubah Sandi
                                </button>
                                <div className="modal fade" id="modal-sandi">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h4 className="modal-title">Ubah Sandi</h4>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label>Password Lama</label>
                                                        <input type="password" className="form-control" value={this.state.sandiLamaKonfirm}  onChange={this.handleSandiLama} />
                                                    </div>

                                                    <div className="form-group">
                                                        <label>Password Baru</label>
                                                        <input type="password" className="form-control" value={this.state.sandi}  onChange={this.handleSandi} />
                                                    </div>

                                                    <div className="form-group">
                                                        <label>Konfirmasi Password Baru</label>
                                                        <input type="password" className="form-control" value={this.state.sandiKonfirm}  onChange={this.handleSandiBaru} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer justify-content-between">
                                            <button type="button" className="btn btn-default" data-dismiss="modal">Tutup</button>
                                            <button type="button" className="btn btn-primary"  onClick={()=>this.ubahPassword(1)} data-dismiss="modal">Ubah</button>
                                        </div>
                                        </div>
                                        {/* /.modal-content */}
                                    </div>
                                    {/* /.modal-dialog */}
                                    </div>
                                    {/* /.modal */}
                    </div>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                    <div className="row">
                    <div className="col-md-4">
                        <div className="card card-primary card-outline">
                        <div className="card-body box-profile">
                            <div className="text-center">
                            <img className="profile-user-img" src={user} style={{width: '100%'}} />
                            </div>
                        </div>
                        {/* /.card-body */}
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card card-primary">
                        <div className="card-header">
                            <h3 className="card-title">About Me</h3>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body">
                            <ul className="list-group list-group-unbordered mb-3">
                            <li className="list-group-item">
                                <b>Nama</b> <a className="float-right">{this.state.data_nama}</a>
                            </li>
                            <li className="list-group-item">
                                <b>NIP</b> <a className="float-right">{this.state.data_nip}</a>
                            </li>
                            <li className="list-group-item">
                                <b>NIDN</b> <a className="float-right">{this.state.data_nip}</a>
                            </li>
                            <li className="list-group-item">
                                <b>NIDK</b> <a className="float-right">{this.state.data_nip}</a>
                            </li>
                            <li className="list-group-item">
                                <b>Email</b> <a className="float-right">{this.state.data_email}</a>
                            </li>
                            <li className="list-group-item">
                                <b>Nomor Telepon</b> <a className="float-right">{this.state.data_telpon}</a>
                            </li>
                            </ul>
                        </div>
                        {/* /.card-body */}
                        </div>
                    </div>
                    </div>
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

export default Profil;
