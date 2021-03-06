import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class Dasbor extends Component {
    render() {
        return (
        <div>
  {/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <div className="container-fluid">
      <div class="row">
          <div class="col-sm-6">
            <div class="alert bg-green">
              <h4>Kelas</h4>
              <span class="d-block"> 12.1A.10</span>                
            </div>
          </div>
          <div class="col-sm-6">
            <div class="alert bg-blue">
                <h4>Jurusan</h4>
                <span class="d-block"> Teknik Informatika</span>                
            </div>
          </div>
        </div>
      </div>{/* /.container-fluid */}
    </section>
    {/* Main content */}
    <section className="content">
      <div className="container-fluid">      
      <div className="row">
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body text-center">
                <div className="description-block ">
                  <span class="description-percentage text-green"><i className="fa fa-check" /> 
 2</span>
                  <h5 class="description-header"></h5>
                  <span class="description-text">JUMLAH PAKET SOAL SUDAH DIKERJAKAN</span>
                </div>
                {/* /.description-block */}
              </div>
            </div>
          </div>
          {/* /.col */}

          <div className="col-sm-3">
            <div className="card">
              <div className="card-body text-center">
                <div className="description-block">
                  <span class="description-percentage text-danger"><i className="fa fa-times" /> 1</span>
                  <h5 class="description-header"></h5>
                  <span class="description-text">JUMLAH PAKET SOAL BELUM DIKERJAKAN</span>
                </div>
                {/* /.description-block */}
              </div>
            </div>
          </div>
          
          <div class="col-sm-3">
            <NavLink exact to="/mahasiswa/ujian" style={{color: 'black'}}>
              <div className="card">
                <div className="card-body text-center">
                  <h4><i className="fas fa-edit" /></h4>
                  <span class="d-block">Ujian</span> 
                </div>  
              </div>
            </NavLink>
          </div>

          <div class="col-sm-3">
            <NavLink exact to="/mahasiswa/hasilujian" style={{color: 'black'}}>
              <div className="card">
                <div className="card-body text-center">
                  <h4><i className="fas fa-edit" /></h4>
                  <span class="d-block">Hasil Ujian</span> 
                </div>  
              </div>
            </NavLink>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 col-sm-12 col-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">
                  <i className="fa fa-2x fa-chart-line" /> Status Aplikasi
                </h3>
              </div>
              <div className="card-body">
              <div className="row">
              <div className="col-md-6 col-sm-6 col-6">
            <div className="info-box">
                <span className="info-box-icon bg-primary elevation-1"><i className="fas fa-book" /></span>
                <div className="info-box-content">
                  <span className="info-box-text">Jurusan</span>
                  <span className="info-box-number">
                    Teknik Informatika
                  </span>
                </div>
                {/* /.info-box-content */}
              </div>
            </div>

            <div className="col-md-6 col-sm-6 col-6">
            <div className="info-box">
                <span className="info-box-icon bg-primary elevation-1"><i className="fas fa-book" /></span>
                <div className="info-box-content">
                  <span className="info-box-text">Jumlah Ujian</span>
                  <span className="info-box-number">
                    10
                  </span>
                </div>
                {/* /.info-box-content */}
              </div>
            </div>
            </div>
              </div>
              {/* <div className="card-footer">
                <div className="float-right">                
                  <button className="btn btn-default"> Export status ke PDF </button>
                  <button className="btn btn-default"> Export status ke EXCEL </button>
                </div>
              </div> */}
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
