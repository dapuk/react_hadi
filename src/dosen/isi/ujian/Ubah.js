import React, { Component } from 'react'

export default class Ubah extends Component {
    constructor(props) {
        super(props);
        this.state = { values: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    createUI(){
        return this.state.values.map((el, i) => 
            <div key={i}>
                <div className="form-group">
                    <button className="btn btn-success btn-sm" onClick={this.addClick.bind(this, i)}>
                        <i className="fa fa-plus"></i>
                    </button>
                    <input type="text" value="" onChange={this.handleChange.bind(this, i)}/>
                    <input type="file"></input>
                    <button className="btn btn-danger btn-sm" onClick={this.removeClick.bind(this, i)}>
                        <i className="fa fa-times"></i>
                    </button>
                </div>
            </div>          
        )
     }

     handleChange(i, event) {
        let values = [...this.state.values];
        values[i] = event.target.value;
        this.setState({ values });
     }
     
     addClick(){
       this.setState(prevState => ({ values: [...prevState.values, '']}))
     }

     removeClick(i){
        let values = [...this.state.values];
        values.splice(i,1);
        this.setState({ values });
     }

     handleSubmit(event) {
        alert('A name was submitted: ' + this.state.values.join(', '));
        event.preventDefault();
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
            <h1>Ubah Data Ujian</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
              <li className="breadcrumb-item"><a href="#">Data Ujian</a></li>
              <li className="breadcrumb-item active">Ubah Data Ujian</li>
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
                                <label>Paket Soal</label>
                                <select className="form-control" name="dosen" required>
                                <option selected disabled value> - Pilih Paket Soal - </option>
                                <option value>10101</option>
                                <option value>11111</option>
                                </select>
                            </div>                       
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="card card-primary">
                        <div className="card-header">
                            <h3 className="card-title">Ubah Soal Ujian</h3>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                Soal No <input type="text" width="10px" /> dari  <input type="text" />
                                <br />
                                <br />
                                <textarea id="summernote" defaultValue={""} />
                                <input type="file"></input>
                            </div>

                            <div className="form-group">
                                <label>Jawaban</label>
                                <div className="form-group">
                                    <button className="btn btn-success btn-sm" onClick={this.addClick.bind(this)}>
                                        <i className="fa fa-plus"></i>
                                    </button>
                                    <input type="text" value=""/>
                                    <input type="file"></input>
                                </div>
                                
                                {this.createUI()}

                                <label>Kunci Jawaban</label>
                                <br />
                                <input type="text" className="form-group" value=""/>
                            </div>                          
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-success">Selanjutnya</button>
                            <br />
                            <button type="submit" className="btn btn-warning">Simpan Sebagai Draft</button>
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

    appendInput() {
        var newInput = `input-${this.state.inputs.length}`;
        this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
    }
}
