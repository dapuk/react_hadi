import React, { Component } from 'react'
import gambar from './GambarUjian.png';

class ProsesUjian extends Component {
        
    constructor(props){        
        super(props);
        this.state = { time: {}, seconds: 5400 };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }
    
    secondsToTime(secs){
        let hours = Math.floor(secs / (60 * 60));
    
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
    
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
    
        let obj = {
          "h": hours,
          "m": minutes,
          "s": seconds
        };
        return obj;
      }
    
      componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });

        if (this.timer == 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
          }
      }
    
      startTimer() {
        
      }
    
      countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
          time: this.secondsToTime(seconds),
          seconds: seconds,
        });
        
        // Check if we're at zero.
        if (seconds == 0) { 
          clearInterval(this.timer);
        }
      }
    
    akhiriUjian = (e) => {
        alert('Ujian Berhasil Diakhiri')
        alert('Anda mendapatkan nilai 95')
        this.props.history.push('/mahasiswa/ujian')
    }

    render() {
        let posisikanan = {
            float:'right'
        };

        let MarginR = {
            marginRight:'5px'
        };

        return (
            <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <center><b>
                        UJIAN AKHIR SEMESTER <br />
                        PEMROGRAMAN WEB
                        </b>
                    </center>
                </div>{/* /.container-fluid */}
            </section>
            <section className="content">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                        <h3 className="card-title">
                            <b>
                                {/* COUNT DOWN */}
                                {this.state.time.h} Jam {this.state.time.m} Menit {this.state.time.s} Detik
                            </b>
                        </h3>

                        <button type="button" style={posisikanan} className="btn btn-info btn-sm" data-toggle="modal" data-target="#modal-default"><b>
                        Cek Soal
                        </b>
                        </button>

                        <div className="modal fade" id="modal-default">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Cek Soal</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-12">
                                        <a href="#" className="btn btn-success btn-sm" style={MarginR}>1</a>
                                        <a href="#" className="btn btn-danger btn-sm" style={MarginR}>2</a>
                                        <a href="#" className="btn btn-success btn-sm" style={MarginR}>3</a>
                                        <a href="#" className="btn btn-default btn-sm" style={MarginR}>4</a>
                                        <a href="#" className="btn btn-default btn-sm" style={MarginR}>5</a>
                                        <a href="#" className="btn btn-default btn-sm" style={MarginR}>6</a>
                                        <a href="#" className="btn btn-default btn-sm" style={MarginR}>7</a>
                                        <a href="#" className="btn btn-default btn-sm" style={MarginR}>8</a>
                                        <a href="#" className="btn btn-default btn-sm" style={MarginR}>9</a>
                                        <a href="#" className="btn btn-default btn-sm" style={MarginR}>10</a>
                                        <br />
                                        <a href="#" className="btn btn-default btn-sm" style={MarginR}>11</a>
                                        <a href="#" className="btn btn-default btn-sm" style={MarginR}>12</a>
                                        <a href="#" className="btn btn-default btn-sm" style={MarginR}>13</a>
                                        <a href="#" className="btn btn-default btn-sm" style={MarginR}>14</a>
                                        <a href="#" className="btn btn-default btn-sm" style={MarginR}>15</a>
                                        <a href="#" className="btn btn-default btn-sm" style={MarginR}>16</a>
                                        <a href="#" className="btn btn-default btn-sm" style={MarginR}>17</a>
                                        <a href="#" className="btn btn-default btn-sm" style={MarginR}>18</a>
                                        <a href="#" className="btn btn-default btn-sm" style={MarginR}>19</a>
                                        <a href="#" className="btn btn-default btn-sm" style={MarginR}>20</a>
                                        <br/>
                                        <a href="#" className="btn btn-default btn-sm" style={MarginR}>21</a>
                                        <a href="#" className="btn btn-default btn-sm" style={MarginR}>22</a>
                                        <a href="#" className="btn btn-default btn-sm" style={MarginR}>23</a>
                                        <a href="#" className="btn btn-default btn-sm" style={MarginR}>24</a>
                                        <a href="#" className="btn btn-default btn-sm" style={MarginR}>25</a>
                                        <a href="#" className="btn btn-default btn-sm" style={MarginR}>26</a>
                                        <a href="#" className="btn btn-default btn-sm" style={MarginR}>27</a>
                                        <a href="#" className="btn btn-default btn-sm" style={MarginR}>28</a>
                                        <a href="#" className="btn btn-default btn-sm" style={MarginR}>29</a>
                                        <a href="#" className="btn btn-default btn-sm" style={MarginR}>30</a>
                                        <br />
                                        <a href="#" className="btn btn-default btn-sm" style={MarginR}>31</a>
                                        <a href="#" className="btn btn-default btn-sm" style={MarginR}>32</a>
                                        <a href="#" className="btn btn-default btn-sm" style={MarginR}>33</a>
                                        <a href="#" className="btn btn-default btn-sm" style={MarginR}>34</a>
                                        <a href="#" className="btn btn-default btn-sm" style={MarginR}>35</a>
                                        <a href="#" className="btn btn-default btn-sm" style={MarginR}>36</a>
                                        <a href="#" className="btn btn-default btn-sm" style={MarginR}>37</a>
                                        <a href="#" className="btn btn-default btn-sm" style={MarginR}>38</a>
                                        <a href="#" className="btn btn-default btn-sm" style={MarginR}>39</a>
                                        <a href="#" className="btn btn-default btn-sm" style={MarginR}>40</a>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer justify-content-between">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Tutup</button>
                                <button type="button"  onClick={()=> {if(window.confirm('Yakin ingin diakhiri ?')){this.akhiriUjian();}}} style={posisikanan} className="btn btn-danger btn-sm"  data-dismiss="modal">
                                    Akhiri Ujian
                                </button>
                            </div>
                            </div>
                            {/* /.modal-content */}
                        </div>
                        {/* /.modal-dialog */}
                        </div>
                        {/* /.modal */}
                        </div>
                        {/* /.card-header */}
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12">
                                Di bawah ini yang merupakan aplikasi DBMS adalah...
                                    <br />
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="radio_jawaban" value="Transmisi Sistem"/>
                                        <label className="form-check-label">A.</label>
                                        Kubernetes
                                    </div>

                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="radio_jawaban" value="Komunikasi Suara"/>
                                        <label className="form-check-label">B.</label>
                                        Docker
                                    </div>

                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="radio_jawaban" value="Sinkronasi"/>
                                        <label className="form-check-label">C.</label>
                                        MySQL
                                    </div>

                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="radio_jawaban" value="Komunikasi Data"/>
                                        <label className="form-check-label">D.</label>
                                        Microsoft Azure
                                    </div>

                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="radio_jawaban" value="Komunikasi Data"/>
                                        <label className="form-check-label">E.</label>
                                        Amazon Web Services
                                    </div>
                                </div>

                                {/* <div className="col-4">
                                    <img src={gambar} className="profile-user-img" style={{width: '100%'}} />
                                </div> */}
                            </div>
                        </div>

                        <div className="card-footer">
                            <button type="submit" className="btn btn-danger btn-sm" style={MarginR} onClick={() => this.props.history.goBack()}>Sebelumnya</button>
                            {/* <button type="submit" className="btn btn-warning btn-sm" style={MarginR}>Ragu-Ragu</button> */}
                            {/* <button type="submit" className="btn btn-success btn-sm" style={MarginR} onClick={() => this.props.history.push('/mahasiswa/prosesujian_8')}>Selanjutnya</button> */}
                            
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

export default ProsesUjian;

