import React, { useState, Component } from 'react';
import { render } from 'react-dom';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css"
import DatePicker from 'react-datepicker';

// import Highcharts from 'highcharts';
// import drilldown from 'highcharts/modules/drilldown.js';
// import HighchartsReact from 'highcharts-react-official';

// drilldown(Highcharts);

const locales = {
  "id-ID": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

const events = [
  // Semester Gasal
  {
    title: "[SEMESTER GASAL - REGISTRASI ADMINISTRASI] Mahasiswa Baru Jalur SNMPTN",
    allDay: true,
    start: new Date(2021,4,17),
    end: new Date(2021,5,3)
  },
  {
    title: "[SEMESTER GASAL - REGISTRASI ADMINISTRASI] Mahasiswa Baru Jalur SBMPTN",
    allDay: true,
    start: new Date(2021,6,6),
    end: new Date(2021,6,17)
  },
  {
    title: "[SEMESTER GASAL - REGISTRASI ADMINISTRASI] Mahasiswa Baru Jalur Penmaba Jalur Ujian Tulis & Prestasi",
    allDay: true,
    start: new Date(2021,7,4),
    end: new Date(2021,7,12)
  },
  {
    title: "[SEMESTER GASAL - REGISTRASI ADMINISTRASI] Mahasiswa Baru Pascasarjana Gelombang I",
    allDay: true,
    start: new Date(2021,2,29),
    end: new Date(2021,4,6)
  },
  {
    title: "[SEMESTER GASAL - REGISTRASI ADMINISTRASI] Mahasiswa Baru Pascasarjana Gelombang II",
    allDay: true,
    start: new Date(2021,5,16),
    end: new Date(2021,5,28)
  },
  {
    title: "[SEMESTER GASAL - REGISTRASI ADMINISTRASI] Mahasiswa Baru Pascasarjana Gelombang III",
    allDay: true,
    start: new Date(2021,7,16),
    end: new Date(2021,7,19)
  },
  {
    title: "[SEMESTER GASAL - REGISTRASI ADMINISTRASI] Mahasiswa Lama",
    allDay: true,
    start: new Date(2021,6,28),
    end: new Date(2021,7,13)
  },
  {
    title: "[SEMESTER GASAL - REGISTRASI ADMINISTRASI] Pengajuan Cuti",
    allDay: true,
    start: new Date(2021,6,28),
    end: new Date(2021,7,19)
  },
  {
    title: "[SEMESTER GASAL - REGISTRASI ADMINISTRASI] Pembayaran Biaya Cuti",
    allDay: true,
    start: new Date(2021,6,28),
    end: new Date(2021,7,20)
  },
  {
    title: "[SEMESTER GASA - REGISTRASI ADMINISTRASI] Penentuan Status Mahasiswa",
    allDay: true,
    start: new Date(2021,8,6),
    end: new Date(2021,8,10)
  },
  {
    title: "[SEMESTER GASAL - REGISTRASI AKADEMIK] Mahasiswa Baru Jalur SNMPTN",
    allDay: true,
    start: new Date(2021,4,17),
    end: new Date(2021,5,4)
  },
  {
    title: "[SEMESTER GASAL - REGISTRASI AKADEMIK] Mahasiswa Baru Jalur SBMPTN",
    allDay: true,
    start: new Date(2021,6,6),
    end: new Date(2021,6,19)
  },
  {
    title: "[SEMESTER GASAL - REGISTRASI AKADEMIK] Mahasiswa Baru Jalur Penmaba Jalur Ujian Tulis & Prestasi",
    allDay: true,
    start: new Date(2021,7,4),
    end: new Date(2021,7,13)
  },
  {
    title: "[SEMESTER GASAL - REGISTRASI AKADEMIK] Mahasiswa Baru Pascasarjana Gelombang I",
    allDay: true,
    start: new Date(2021,2,29),
    end: new Date(2021,4,13)
  },
  {
    title: "[SEMESTER GASAL - REGISTRASI AKADEMIK] Mahasiswa Baru Pascasarjana Gelombang II",
    allDay: true,
    start: new Date(2021,5,16),
    end: new Date(2021,5,30)
  },
  {
    title: "[SEMESTER GASAL - REGISTRASI AKADEMIK] Mahasiswa Baru Pascasarjana Gelombang III",
    allDay: true,
    start: new Date(2021,7,16),
    end: new Date(2021,7,20)
  },  
  {
    title: "[SEMESTER GASAL - PENGISIAN KRS] Mahasiswa Lama (Semua Jenjang)",
    allDay: true,
    start: new Date(2021,6,28),
    end: new Date(2021,7,16)
  },  
  {
    title: "[SEMESTER GASAL - PENGISIAN KRS] Mahasiswa Baru (Diploma dan Sarjana)",
    allDay: true,
    start: new Date(2021,7,19),
    end: new Date(2021,7,20)
  },  
  {
    title: "[SEMESTER GASAL - PENGISIAN KRS] Mahasiswa Baru Pascasarjana",
    allDay: true,
    start: new Date(2021,7,21),
    end: new Date(2021,7,21)
  },  
  {
    title: "[SEMESTER GASAL - PERKULIAHAN] Pelaksanaan Perkuliahan",
    allDay: true,
    start: new Date(2021,7,23),
    end: new Date(2021,11,10)
  },  
  {
    title: "[SEMESTER GASAL - PERKULIAHAN] Perubahan KRS (Batal Tambah)",
    allDay: true,
    start: new Date(2021,7,23),
    end: new Date(2021,8,3)
  },  
  {
    title: "[SEMESTER GASAL - PERKULIAHAN] Pengesahan KRS Perubahan Oleh Penasehat Akademik",
    allDay: true,
    start: new Date(2021,7,23),
    end: new Date(2021,8,4)
  },  
  {
    title: "[SEMESTER GASAL - PERKULIAHAN] Ujian Tengah Semester",
    allDay: true,
    start: new Date(2021,9,11),
    end: new Date(2021,9,16)
  },  
  {
    title: "[SEMESTER GASAL - PERKULIAHAN] Waktu Pemenuhan Perkuliahan Sebelum UAS",
    allDay: true,
    start: new Date(2021,11,13),
    end: new Date(2021,11,18)
  },  
  {
    title: "[SEMESTER GASAL - PERKULIAHAN] Ujian Akhir Semester",
    allDay: true,
    start: new Date(2021,11,20),
    end: new Date(2021,11,31)
  },  
  {
    title: "[SEMESTER GASAL - PERKULIAHAN] Pemasukan Nilai Matakuliah Tatap Muka",
    allDay: true,
    start: new Date(2021,11,22),
    end: new Date(2022,0,7)
  },  
  {
    title: "[SEMESTER GASAL - PERKULIAHAN] Evaluasi Dosen oleh Mahasiswa (EDOM)",
    allDay: true,
    start: new Date(2021,11,22),
    end: new Date(2022,0,10)
  },  
  {
    title: "[SEMESTER GASAL - PERKULIAHAN] Pinalti Pemberian Nilai oleh Sistem",
    allDay: true,
    start: new Date(2022,0,8),
    end: new Date(2022,0,8)
  },  
  {
    title: "[SEMESTER GASAL - PERKULIAHAN] Pengumuman Nilai Matakuliah selain Tugas Akhir / Skripsi / Tesis kepada Mahasiswa",
    allDay: true,
    start: new Date(2022,0,10),
    end: new Date(2022,0,10)
  },  
  {
    title: "[SEMESTER GASAL - PERKULIAHAN] Perbaikan Nilai Semester Berjalan",
    allDay: true,
    start: new Date(2022,0,10),
    end: new Date(2022,0,13)
  },  
  {
    title: "[SEMESTER GASAL - PERKULIAHAN] Evaluasi Kemajuan Studi",
    allDay: true,
    start: new Date(2022,0,17),
    end: new Date(2022,0,21)
  },  
  {
    title: "[SEMESTER GASAL - PENYELESAIAN STUDI] Batas Akhir Pengisian Nilai Tugas Akhir / Skripsi / Tesis di Siakad Tahap I",
    allDay: true,
    start: new Date(2021,9,22),
    end: new Date(2021,9,22)
  },  
  {
    title: "[SEMESTER GASAL - PENYELESAIAN STUDI] Batas Akhir Yudisium Semua Jenjang Tahap I",
    allDay: true,
    start: new Date(2021,10,1),
    end: new Date(2021,10,1)
  },
  {
    title: "[SEMESTER GASAL - PENYELESAIAN STUDI] Batas Akhir Penyerahan Berkas Wisuda & Validasi Berkas Calon Wisudawan Tahap I",
    allDay: true,
    start: new Date(2021,10,2),
    end: new Date(2021,10,2)
  },  
  {
    title: "[SEMESTER GASAL - PENYELESAIAN STUDI] Wisuda Tahap I",
    allDay: true,
    start: new Date(2021,10,30),
    end: new Date(2021,10,30)
  },  
  {
    title: "[SEMESTER GASAL - PENYELESAIAN STUDI] Batas Akhir Pengisian Nilai Tugas Akhir / Skripsi / Tesis di Siakad Tahap II",
    allDay: true,
    start: new Date(2022,1,21),
    end: new Date(2022,1,21)
  },  
  {
    title: "[SEMESTER GASAL - PENYELESAIAN STUDI] Batas Akhir Yudisium Semua Jenjang Tahap II",
    allDay: true,
    start: new Date(2022,1,28),
    end: new Date(2022,1,28)
  },  
  {
    title: "[SEMESTER GASAL - PENYELESAIAN STUDI] Batas Akhir Pendaftaran Wisuda",
    allDay: true,
    start: new Date(2022,2,2),
    end: new Date(2022,2,2)
  },  
  {
    title: "[SEMESTER GASAL - PENYELESAIAN STUDI] Batas Akhir Penyerahan Berkas Wisuda & Validasi Berkas Calon Wisudawan Tahap II",
    allDay: true,
    start: new Date(2022,2,4),
    end: new Date(2022,2,4)
  },  
  {
    title: "[SEMESTER GASAL - PENYELESAIAN STUDI] Wisuda Tahap II",
    allDay: true,
    start: new Date(2022,3,13),
    end: new Date(2022,3,13)
  },  
  {
    title: "[SEMESTER GASAL - PENYELESAIAN STUDI] Batas Akhir Pelaporan PDDikti",
    allDay: true,
    start: new Date(2022,3,29),
    end: new Date(2022,3,29)
  },  
  
]

export default class Dasbor extends Component {
    render() {
      

        return (
        <div>
  {/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <div className="container-fluid">
        <div className="row">
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
    {/* Main content */}
    <section className="content">
      
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
                <div className="col-md-4 col-sm-4 col-4">
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
              <div className="col-md-4 col-sm-4 col-4">
              <div className="info-box">
                    <span className="info-box-icon bg-warning elevation-1"><i className="fas fa-edit" /></span>
                    <div className="info-box-content">
                      <span className="info-box-text">Jumlah Ujian</span>
                      <span className="info-box-number">
                        10
                      </span>
                    </div>
                    {/* /.info-box-content */}
                  </div>
              </div>
              <div className="col-md-4 col-sm-4 col-4">
              <div className="info-box">
                    <span className="info-box-icon bg-success elevation-1"><i className="fas fa-book" /></span>
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

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">
                  <i className="fa fa-2x fa-calendar" /> Kalendar Akademik
                </h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className='col-12'>
                    <Calendar 
                      localizer={localizer} 
                      events={events} 
                      startAccessor="start" 
                      endAccessor="end" 
                      style={{
                       height: 700,
                       margin: "50px" 
                      }}
                    />
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
