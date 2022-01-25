import React, { Component } from 'react'
import axios from 'axios'
import qs from 'query-string'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

let MarginFontAwe = {
  marginRight:'5px'
};

const api = axios.create({
//   baseURL: 'http://localhost:8000/'
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

const arr_jawaban = ["B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

class Tambah extends Component {
  constructor(props){
      super(props)

      this.state = {
          values: [],
          count: 0,
          soal: 1,
          id: '',
          matkul: ''
      }
  }

  handleChange = (e) => {
      this.setState({[e.target.name] : e.target.value})
  }


  addBank = async () => {
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

      api.post('/bank_soal', {
          bank_soal: this.state.bank_soal,
          matkul: this.state.matkul
      }).then( json => {
          alert('Data Bank Soal berhasil ditambah!')
          this.props.history.push('/dosen/bank')
      })
  }

  createUI(){
    return this.state.values.map((el, i) => 
        <div key={i}>
            <div className="form-group">
                <div className="form-check">
                    <input className="form-check-input" type="radio" id={"rd_jawaban"+i} name="radio_jawaban" value={arr_jawaban[i]} />
                    <label className="form-check-label" id={"label_jawaban"+i}>{arr_jawaban[i]}</label>
                </div>
                <button className="btn btn-success btn-sm" onClick={this.addClick.bind(this, i)}>
                    <i className="fa fa-plus"></i>
                </button>
                <input type="text" value={el||''} onChange={this.handleChangeDynamic.bind(this, i)}/>
                <input type="file"></input>
                <button className="btn btn-danger btn-sm" onClick={this.removeClick.bind(this, i)}>
                    <i className="fa fa-times"></i>
                </button>
            </div>
        </div>          
    )
 }

 handleChangeDynamic(i, event) {
    let values = [...this.state.values];
    values[i] = event.target.value;
    this.setState({ values });
    this.setState(prevState => {
        return {count: prevState.count + 1}
     })
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

nextClick = (e) => {
    this.setState(prevState => {
        return {soal: prevState.soal + 1}
     })

    // let values = this.state.values.splice(0, this.state.count);
    // this.setState({ values });
}

  render() {
    let posisikanan = {
        float:'right'
    };

    let MarginR = {
        marginRight:'5px'
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
              <h1>Tambah Data Bank Soal</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                <li className="breadcrumb-item"><a href="#">Data Bank Soal</a></li>
                <li className="breadcrumb-item active">Tambah Data Bank Soal</li>
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
                              <h3 className="card-title">Bank Soal</h3>
                          </div>
                          <div className="card-body">
                            <div className="form-group">
                                <label>Matakuliah</label>
                                <select className="form-control" name="matkul"  defaultValue={this.state.matkul}  onChange={this.handleChange}  required>
                                <option selected disabled value=""> - Pilih Mata Kuliah - </option>
                                <option value="Algoritma Pemrograman">Algoritma Pemrograman</option>
                                <option value="Komunikasi Data">Komunikasi Data</option>
                                <option value="Interaksi Manusia dan Komputer">Interaksi Manusia dan Komputer</option>
                                </select>
                            </div> 
                          </div>
                          {/* <div className="card-footer">
                              <button type="submit" className="btn btn-primary" onClick={this.addBank}>Simpan</button>
                              <br />
                          </div> */}
                      </div>
                  </div>
              </div>

              <div className="row">
                <div className="col-12">
                    <div className="card card-primary">
                        <div className="card-header">
                            <h3 className="card-title">Tambah Soal</h3>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                {/* Soal No <input type="text" width="3px" value={this.state.soal} /> */}
                                
                                {/* <textarea id="summernote" defaultValue={""} /> */}
                                <CKEditor
                                    editor={ ClassicEditor }
                                    // data="<p>Hello from CKEditor 5!</p>"
                                    onReady={ editor => {
                                        // You can store the "editor" and use when it is needed.
                                        // console.log( 'Editor is ready to use!', editor );
                                    } }
                                    onChange={ ( event, editor ) => {
                                        const data = editor.getData();
                                        console.log( { event, editor, data } );
                                    } }
                                    onBlur={ ( event, editor ) => {
                                        console.log( 'Blur.', editor );
                                    } }
                                    onFocus={ ( event, editor ) => {
                                        console.log( 'Focus.', editor );
                                    } }
                                />

                                <br />
                                <input type="file"></input>
                            </div>

                            <div className="form-group">
                                <label>Jawaban</label>
                                <div className="form-group">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="radio_jawaban" value="A"/>
                                        <label className="form-check-label">A</label>
                                    </div>

                                    <button className="btn btn-success btn-sm" onClick={this.addClick.bind(this)}>
                                        <i className="fa fa-plus"></i>
                                    </button>
                                    <input type="text" />
                                    <input type="file"></input>
                                </div>
                                
                                {this.createUI()}
                            </div>                          
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-danger btn-sm" style={MarginR} onClick={() => this.props.history.goBack()}>Sebelumnya</button>
                            <button type="submit" className="btn btn-success btn-sm" style={MarginR} onClick={() => this.props.history.push('/dosen/tambahbank_4')}>Selanjutnya</button>
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

export default Tambah;
