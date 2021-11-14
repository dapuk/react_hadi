import React, { Component } from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import drilldown from 'highcharts/modules/drilldown.js';
import HighchartsReact from 'highcharts-react-official';

drilldown(Highcharts);

export default class Dasbor extends Component {
    render() {
      const options = {
        chart: {
          type: 'column'
        },
        title: {
            text: 'Data Mahasiswa Per Tahun dan Jurusan'
        },
        subtitle: {
            text: ''
        },
        accessibility: {
            announceNewData: {
                enabled: true
            }
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Jumlah'
            }
    
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y}'
                }
            }
        },
    
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>'
        },
        credits: {
          enabled: false
        },    
        series: [
            {
                name: "Browsers",
                colorByPoint: true,
                data: [
                    {
                        name: "2021",
                        y: 1000,
                        drilldown: "2021"
                    },
                    {
                        name: "2020",
                        y: 1500,
                        drilldown: "2020"
                    },
                ]
            }
        ],
        drilldown: {
            series: [
                {
                    name: "2021",
                    id: "2021",
                    data: [
                        [
                            "Teknik Informatika",
                            300
                        ],
                        [
                          "Sistem Informasi",
                          700
                      ],
                        
                    ]
                },
                {
                  name: "2020",
                  id: "2020",
                  data: [
                      [
                          "Teknik Informatika",
                          7500
                      ],
                      [
                        "Sistem Informasi",
                        7500
                    ],
                      
                  ]
                }
            ]
        }
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
            <h1>Dashboard</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              {/* <li className="breadcrumb-item"><a href="#">Home</a></li> */}
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </div>
        </div>
      </div>{/* /.container-fluid */}
    </section>
    {/* Main content */}
    <div>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-sm-4 col-4">
              <a href="#" style={{color: 'black'}}>
                <div className="card">
                  <div className="card-body text-center">
                    <i className="fas fa-4x fa-plus-square" />
                    <br /><small>Pengguna</small>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-sm-4 col-4">
              <a href="#" style={{color: 'black'}}>
                <div className="card">
                  <div className="card-body text-center">
                    <i className="fas fa-4x fa-users" />
                    <br /><small>Dosen</small>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-sm-4 col-4">
              <a href="#" style={{color: 'black'}}>
                <div className="card">
                  <div className="card-body text-center">
                    <i className="fas fa-4x fa-users" />
                    <br /><small>Mahasiswa</small>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-sm-4 col-4">
              <a href="#" style={{color: 'black'}}>
                <div className="card">
                  <div className="card-body text-center">
                    <i className="fas fa-4x fa-book" />
                    <br /><small>Mata Kuliah</small>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-sm-4 col-4">
              <a href="#" style={{color: 'black'}}>
                <div className="card">
                  <div className="card-body text-center">
                    <i className="fas fa-4x fa-bullhorn" />
                    <br /><small>Pengumuman</small>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-sm-4 col-4">
              <a href="#" style={{color: 'black'}}>
                <div className="card">
                  <div className="card-body text-center">
                    <i className="fas fa-4x fa-edit" />
                    <br /><small>Ujian</small>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="form-group"><label>Pilih Tanggal</label>
                  <input type="text" name="periodik" className="form-control float-right" id="range-date-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body text-center">
                <div className="description-block border-right">
                  <span class="description-percentage text-green"><i className="fa fa-check" /> 
 1500</span>
                  <h5 class="description-header"></h5>
                  <span class="description-text">JUMLAH MAHASISWA SUDAH MENGERJAKAN</span>
                </div>
                {/* /.description-block */}
              </div>
            </div>
          </div>
          {/* /.col */}

          <div className="col-sm-4">
            <div className="card">
              <div className="card-body text-center">
                <div className="description-block border-right">
                  <span class="description-percentage text-warning"><i className="fa fa-hourglass-half" /> 1500</span>
                  <h5 class="description-header"></h5>
                  <span class="description-text">JUMLAH MAHASISWA SEDANG MENGERJAKAN</span>
                </div>
                {/* /.description-block */}
              </div>
            </div>
          </div>
          {/* /.col */}

          <div className="col-sm-4">
            <div className="card">
              <div className="card-body text-center">
                <div className="description-block border-right">
                  <span class="description-percentage text-danger"><i className="fa fa-times" /> 300</span>
                  <h5 class="description-header"></h5>
                  <span class="description-text">JUMLAH MAHASISWA BELUM MENGERJAKAN</span>
                </div>
                {/* /.description-block */}
              </div>
            </div>
          </div>
          {/* /.col */}
        </div>
        </div>{/* /.container-fluid */}
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <a href="#" style={{color: 'black'}}>
                <div className="card">
                  <div className="card-body text-center">
                    <div>
                      <HighchartsReact highcharts={Highcharts} options={options} />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>{/* /.container-fluid */}

        <div className="container-fluid">
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
                  <div className="col-md-3 col-sm-3 col-3">
                    <div className="info-box">
                        <span className="info-box-icon bg-info elevation-1"><i className="fas fa-book" /></span>
                        <div className="info-box-content">
                          <span className="info-box-text">Jumlah Kelas</span>
                          <span className="info-box-number">
                            10
                          </span>
                        </div>
                        {/* /.info-box-content */}
                      </div>
                      </div>

                      <div className="col-md-3 col-sm-3 col-3">
                        <div className="info-box">
                            <span className="info-box-icon bg-success elevation-1"><i className="fas fa-users" /></span>
                            <div className="info-box-content">
                              <span className="info-box-text">Jumlah Dosen</span>
                              <span className="info-box-number">
                                10
                              </span>
                            </div>
                            {/* /.info-box-content */}
                          </div>
                      </div>

                      <div className="col-md-3 col-sm-3 col-3">
                        <div className="info-box">
                            <span className="info-box-icon bg-primary elevation-1"><i className="fas fa-users" /></span>
                            <div className="info-box-content">
                              <span className="info-box-text">Jumlah Mahasiswa</span>
                              <span className="info-box-number">
                                10
                              </span>
                            </div>
                            {/* /.info-box-content */}
                          </div>
                      </div>

                      <div className="col-md-3 col-sm-3 col-3">
                        <div className="info-box">
                            <span className="info-box-icon bg-warning elevation-1"><i className="fas fa-users" /></span>
                            <div className="info-box-content">
                              <span className="info-box-text">Jumlah Matakuliah</span>
                              <span className="info-box-number">
                                10
                              </span>
                            </div>
                            {/* /.info-box-content */}
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
  </div>
  {/* /.content-wrapper */}</div>

        )
    }
}
