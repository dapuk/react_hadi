import React, { Component } from 'react' 
import axios from 'axios'
import qs from 'query-string'
import {Link} from 'react-router-dom'

let MarginFontAwe = {
  marginRight:'5px'
};

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/dapuk/dbjsonhadi'
})

class MatKulList extends Component {
  constructor(props){
    super(props)

    this.state = {
      matakuliah: [],
    }
  }

  componentDidMount(){
    api.get('/tbl_matkul')
    .then(res=>{
      this.setState({
        matakuliah: res.data
      })
    })
  }

  DeleteMatkul = (idMatkul) => {
    const {matakuliah} = this.state
    const data = qs.stringify({
      id:idMatkul
    })

    api.delete('/tbl_matkul/'+idMatkul,
      {
        data: data,
        headers: {'Content-type': 'application/x-www-form-urlencoded'}
      }
    ).then(json =>{
      this.setState({
        matakuliah: matakuliah.filter(matakuliah => matakuliah.id !== idMatkul)
      })
      alert('Data Mata Kuliah berhasil dihapus!')
      this.props.history.push('/admin/matakuliah')
    })
  }
  // const [tbl_matkul, setTblMatkul] = useState([]);

  //   useEffect(() => {
  //     // memanggil API untuk mengambil data todos
  //     fetch("http://localhost:8000/tbl_matkul")
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         // ketika Rest API sukses, simpan data dari response ke dalam state lokal
  //         setTblMatkul(data);
  //       })
  //       .catch((err) => {
  //         if (err.name === "AbortError") {
  //           console.log("fetch aborted.");
  //         }
  //       });
  // }, []);

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
                    <h3 className="card-title">Data Mata Kuliah</h3>
                    <div className="card-tools">
                      <a href="#" className="btn btn-sm btn-success" style={MarginFontAwe}>
                        <i className="fas fa-file-csv" /> Export CSV
                      </a> 

                      <Link to="/admin/tambahmatakuliah" className="btn btn-sm btn-primary">
                          <i className="fas fa-plus" /> Tambah Mata Kuliah
                      </Link>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <table className="dataTable table table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>Mata Kuliah</th>
                          <th>Opsi</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.matakuliah.map(matakuliah=>
                          <tr key={matakuliah.id}>
                            <td>{matakuliah.nama_matkul}</td>
                            <td>
                              <Link to=
                                {
                                  {
                                    pathname: '/admin/ubahmatakuliah',
                                    state: {
                                      id: matakuliah.id,
                                      nama_matkul: matakuliah.nama_matkul
                                    }
                                  }
                                } 
                                >
                                  <button className="btn btn-sm btn-warning" style={MarginFontAwe}>
                                    <i className="fas fa-edit" /> Ubah
                                  </button>
                              </Link>

                              <button onClick={()=>this.DeleteMatkul(matakuliah.id)} className="btn btn-sm btn-danger">
                                <i className="fas fa-trash" /> Hapus
                              </button>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
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

export default MatKulList;