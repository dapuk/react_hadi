import React, { Component } from 'react'

export default class Profil extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                    </div>{/* /.container-fluid */}
                </section>
                <section className="content">
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                            <h3 className="card-title">Data Profile</h3>
                            <div className="card-tools">
                                <a href="#" className="btn btn-sm btn-primary">
                                <i className="fas fa-edit" /> Edit Profile
                                </a>
                            </div>
                            </div>
                            {/* /.card-header */}
                            <div className="card-body">
                            <div className="row">
                                <div className="col-md-4">
                                <div className="card card-primary card-outline">
                                    <div className="card-body box-profile">
                                    <div className="text-center">
                                        <img className="profile-user-img" src="http://localhost/e_test/AdminLTE/user.png" style={{width: '100%'}} />
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
                                        <b>Nama</b> <a className="float-right">Hadi, S.Pd</a>
                                        </li>
                                        <li className="list-group-item">
                                        <b>NIM</b> <a className="float-right">001</a>
                                        </li>
                                        <li className="list-group-item">
                                        <b>Email</b> <a className="float-right">email@mahasiswa.com</a>
                                        </li>
                                        <li className="list-group-item">
                                        <b>Angkatan</b> <a className="float-right">2017</a>
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
        )
    }
}
